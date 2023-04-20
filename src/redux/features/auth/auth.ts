import {
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { RootState } from '../../store';
import { logout, setCredentials } from './authSlice';

export enum ROLE {
  CUSTOMER = 'customer',
  ARCHITECT = 'architect',
}

export interface User {
  email: string;
  role: ROLE;
}

export interface UserResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3001/',
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = (getState() as RootState).auth.accessToken;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);

  if ((result.error as FetchBaseQueryError)?.status === 401) {
    console.log('sending refresh token');
    // send refresh token to get new access token
    const refreshResult = await baseQuery(
      { url: '/refresh-token', method: 'PUT' },
      api,
      extraOptions,
    );
    console.log(refreshResult);
    if (refreshResult?.data) {
      const user = api.getState().auth.user;
      api.dispatch(setCredentials({ ...refreshResult.data, user }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    protected: builder.mutation<{ message: string }, void>({
      query: () => 'protected',
    }),
  }),
});

export const { useLoginMutation, useProtectedMutation } = api;

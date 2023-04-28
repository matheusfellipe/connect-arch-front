import { api } from '../api';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  gender: string;
  age: number;
  registry?: string;
  specialty?: string;
  roleId: string;
}

type UsersResponse = User[];

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addNewUser: builder.mutation({
      query: (initialUserData) => ({
        url: '/users',
        method: 'POST',
        body: {
          ...initialUserData,
        },
      }),
    }),
    getUser: builder.query<UsersResponse, void>({
      query: () => ({
        url: 'users',
      }),
    }),
  }),
});

export const { useAddNewUserMutation, useGetUserQuery } = userApi;

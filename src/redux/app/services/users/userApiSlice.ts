import { api } from '../api';

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
  }),
});

export const { useAddNewUserMutation } = userApi;

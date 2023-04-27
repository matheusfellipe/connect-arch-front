import { api } from '../api';

export const requestServiceApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addNewRequestService: builder.mutation({
      query: (initialUserData) => ({
        url: '/service-request',
        method: 'POST',
        body: {
          ...initialUserData,
        },
      }),
    }),
  }),
});

export const { useAddNewRequestServiceMutation } = requestServiceApi;

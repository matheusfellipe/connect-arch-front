import { api } from '../api';

type ServiceStatus = 'requested' | 'accepted' | 'refused';

export interface Customer {
  name: string;
}

export interface OrderService {
  id: string;
  description: string;
  architectId: string;
  customerId: string;
  customer: Customer;
  isDeleted: boolean;
  status: ServiceStatus;
}

type OrderServiceResponse = OrderService[];

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
    getAllRequestService: builder.query<OrderServiceResponse, void>({
      query: () => ({ url: 'service-requests' }),
    }),
    getByStatusRequestService: builder.query<OrderServiceResponse, void>({
      query: (status) => `service-requests/${status}`,
    }),
    updateRequestService: builder.mutation<OrderService, Partial<OrderService>>(
      {
        query(data) {
          const { id, ...body } = data;
          return {
            url: `service-request/${id}`,
            method: 'PUT',
            body,
          };
        },
      },
    ),
    deleteRequestService: builder.mutation<OrderService, Partial<OrderService>>(
      {
        query(data) {
          const { id, ...body } = data;
          return {
            url: `service-request/${id}`,
            method: 'PUT',
            body,
          };
        },
      },
    ),
  }),
});

export const {
  useAddNewRequestServiceMutation,
  useGetAllRequestServiceQuery,
  useGetByStatusRequestServiceQuery,
  useUpdateRequestServiceMutation,
  useDeleteRequestServiceMutation,
} = requestServiceApi;

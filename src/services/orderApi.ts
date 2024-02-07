// ordersAPI.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ordersAPI = createApi({
    reducerPath: 'ordersAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }), // Replace with your API base URL
    endpoints: (builder) => ({
        createOrder: builder.mutation<any, { customerId: number; bookId: number; quantity: number }>({
            query: (newOrder) => ({
                url: 'orders',
                method: 'POST',
                body: newOrder,
            }),
        }),
    }),
});

export const { useCreateOrderMutation } = ordersAPI;

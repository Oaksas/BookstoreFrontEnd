// userAPI.ts

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../models";

export const userAPI = createApi({
    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
    endpoints: (builder) => ({
        getUserById: builder.query<any, number>({
            query: (id) => `users/${id}`,
        }),

        createUser: builder.mutation<any, Partial<User>>({
            query: (newUser) => ({
                url: "users",
                method: "POST",
                body: newUser,
            }),
        }),

        updateUser: builder.mutation<any, Partial<User>>({
            query: (user) => ({
                url: `users/${user.id}`,
                method: "PUT",
                body: user,
            }),
        }),

        deleteUser: builder.mutation<any, number>({
            query: (id) => ({
                url: `users/${id}`,
                method: "DELETE",
            }),
        }),

        loginUser: builder.mutation<any, { username: string; password: string }>({
            query: (loginData) => ({
                url: "users/login",
                method: "POST",
                body: loginData,
            }),
        }),

        getAllOrders: builder.query<any, number>({
            query: (id) => `users/${id}/orders`,
        }),

    }),
});

export const {
    useGetUserByIdQuery,
    useCreateUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
    useLoginUserMutation,
    useGetAllOrdersQuery,
} = userAPI;

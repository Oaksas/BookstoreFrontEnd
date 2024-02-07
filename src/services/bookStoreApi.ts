import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Book } from "../models";

export const bookAPI = createApi({
    reducerPath: "bookAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    endpoints: (builder) => ({
        getBookById: builder.query<any, number>({
            query: (id) => `books/${id}`,
        }),

        getAllBooks: builder.query<any, void>({
            query: () => "books",
        }),
        createBook: builder.mutation<any, Partial<Book>>({
            query: (newBook) => ({
                url: "books",
                method: "POST",
                body: newBook,
            }),
        }),
        updateBook: builder.mutation<any, Partial<Book>>({
            query: (book) => ({
                url: `books/${book.id}`,
                method: "PUT",
                body: book,
            }),
        }),

        deleteBook: builder.mutation<any, number>({
            query: (id) => ({
                url: `books/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const { useGetBookByIdQuery, useGetAllBooksQuery, useCreateBookMutation, useUpdateBookMutation, useDeleteBookMutation } = bookAPI;


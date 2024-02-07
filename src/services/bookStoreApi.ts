import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Book } from "../models";

// Placeholder types for query and mutation return values
type QueryReturnValue<T> = { data: T };
type MutationReturnValue<T> = { data: T };

export const bookAPI = createApi({
    reducerPath: "bookAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
    endpoints: (builder) => ({
        getBookById: builder.query<Book, number>({
            query: (id) => `books/${id}`,
        }),

        getAllBooks: builder.query<Book[], void>({
            query: () => "books",
        }),

        createBook: builder.mutation<MutationReturnValue<Book>, Partial<Book>>({
            query: (newBook) => ({
                url: "books",
                method: "POST",
                body: newBook,
            }),
        }),

        updateBook: builder.mutation<MutationReturnValue<Book>, Partial<Book>>({
            query: (book) => ({
                url: `books/${book.id}`,
                method: "PUT",
                body: book,
            }),
        }),

        deleteBook: builder.mutation<MutationReturnValue<number>, number>({
            query: (id) => ({
                url: `books/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const {
    useGetBookByIdQuery,
    useGetAllBooksQuery,
    useCreateBookMutation,
    useUpdateBookMutation,
    useDeleteBookMutation,
} = bookAPI;

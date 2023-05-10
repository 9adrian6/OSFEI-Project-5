import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/books/v1/",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (bookName) => ({
        url: `volumes?q=${bookName}&maxResults=20&key=AIzaSyCuoV0qoGT6ha_tyjk57Nt9HyJxZxLxv1M`,
      }),
    }),
    getBookPage: builder.query({
      query: (id) => ({
        url: `volumes/${id}?key=AIzaSyCuoV0qoGT6ha_tyjk57Nt9HyJxZxLxv1M`,
      }),
    }),
  }),
});

export const { useGetBooksQuery, useGetBookPageQuery } = apiSlice;

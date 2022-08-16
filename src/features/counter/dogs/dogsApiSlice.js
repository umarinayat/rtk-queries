import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DOGS_API_KEYS =
  "live_ttaaxTCuna4ojoijDfJ0lbYr380dOfy15x3bfhZePEHLyLxcIOhhJmtp1ctYak0r";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: " https://api.thedogapi.com/v1/",
    prepareHeaders(headers) {
      headers.set("x-api-key", DOGS_API_KEYS);

      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query({
        query(limit = 10) {
          return `/breeds?limit=${limit}`;
        },
      }),
      fetchCategories: builder.query({
        query() {
          return `/categories`;
        },
      }),
    };
  },
});

export const { useFetchBreedsQuery, useFetchCategoriesQuery } = apiSlice;

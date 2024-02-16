import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const CAT_API_URL = import.meta.env.VITE_CAT_API_URL;
const CAT_API_KEY = import.meta.env.VITE_CAT_API_KEY;
export const catApiSlice = createApi({
  reducerPath: "catApi",
  baseQuery: fetchBaseQuery({
    // baseQuery içinde api url tanımlaması yapılır
    baseUrl: CAT_API_URL, // baseUrl içinde api url tanımlaması yapılır
    prepareHeaders(headers) {
      // prepare headers içinde api key tanımlaması yapılır
      headers.set("x-api-key", CAT_API_KEY);
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchCategories: builder.query({
        query() {
          return "/breeds"; // query içinde api endpoint tanımlaması yapılır
        },
      }),
      fetchCategory: builder.query({
        query(categoryName) {
          return `/images/search?limit=10&breed_ids=${categoryName}`; // query içinde api endpoint tanımlaması yapılır
        },
      }),
    };
  },
});
export const { useFetchCategoriesQuery, useFetchCategoryQuery } = catApiSlice; // useFetchCategoriesQuery hook fonksiyonu oluşturulur

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../models/shop';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: 'shopApi',
  tagTypes: ['Product'],
  endpoints: (build) => ({
    getFeatured: build.query<Product[], void>({
      query: () => 'shop/products/featured',
      providesTags: ['Product'],
    }),
  }),
});

export const { useGetFeaturedQuery } = api;

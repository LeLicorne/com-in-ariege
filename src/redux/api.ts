import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { NewsletterSub } from '../models/contact';
import { Category, Product } from '../models/shop';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_URL }),
  reducerPath: 'shopApi',
  tagTypes: ['Category', 'Product', 'Contact'],
  endpoints: (build) => ({
    getFeatured: build.query<Product[], void>({
      query: () => 'shop/products/featured',
      providesTags: ['Product'],
    }),
    subNewsletter: build.mutation<Response, Partial<NewsletterSub>>({
      query: (body) => ({
        url: `contact/newsletter/register`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Contact'],
    }),
    getCategories: build.query<Category[], void>({
      query: () => {
        return {
          url: 'shop/categories',
          method: 'GET',
        };
      },
      providesTags: ['Category'],
    }),
  }),
});

export const { useGetCategoriesQuery, useGetFeaturedQuery, useSubNewsletterMutation } = api;

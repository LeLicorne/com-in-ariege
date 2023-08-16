import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { NewsletterSub } from '../models/contact';
import { Product } from '../models/shop';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_URL }),
  reducerPath: 'shopApi',
  tagTypes: ['Product', 'Contact'],
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
  }),
});

export const { useGetFeaturedQuery, useSubNewsletterMutation } = api;

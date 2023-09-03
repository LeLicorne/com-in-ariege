import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ContactMessage, NewsletterSub, Phone } from '../models/contact';
import { Category, Product } from '../models/shop';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_URL }),
  reducerPath: 'shopApi',
  tagTypes: ['Category', 'Product', 'Contact'],
  endpoints: (build) => ({
    subNewsletter: build.mutation<Response, Partial<NewsletterSub>>({
      query: (body) => ({
        url: `contact/newsletter/register`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Contact'],
    }),
    sendMessage: build.mutation<void, Partial<ContactMessage>>({
      query: (body) => ({
        url: `contact/message/send`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Contact'],
    }),
    phoneCall: build.mutation<void, Partial<Phone>>({
      query: (body) => ({
        url: `contact/phone/add`,
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
    getProductById: build.query<Product, { productId: string | undefined }>({
      query: ({ productId }) => {
        if (!productId) {
          throw new Error('Product ID is required');
        }
        return {
          url: `shop/product/${productId}`,
        };
      },
      providesTags: ['Product'],
    }),
    getProducts: build.query<
      { products: Product[]; count: number },
      { text?: string; categoryId?: string; subcategoryId?: string; page: string }
    >({
      query: ({ text, categoryId, subcategoryId, page }) => {
        if (!page) {
          throw new Error('Page is required');
        }

        if (text) {
          return {
            url: `shop/products/search/${text}/${page}`,
            method: 'GET',
          };
        }
        return {
          url: `shop/products/${categoryId}/${subcategoryId}/${page}`,
          method: 'GET',
        };
      },
      providesTags: ['Product'],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductByIdQuery,
  useGetProductsQuery,
  useSubNewsletterMutation,
  useSendMessageMutation,
  usePhoneCallMutation,
} = api;

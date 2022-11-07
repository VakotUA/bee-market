import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_DOMAIN_URL } from '../../lib/constants'
import { AllCategoriesQuery, IBaseQuery } from './category.api.types'

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_DOMAIN_URL}/api/v2/`,
  }),
  endpoints: (build) => ({
    getAllCategories: build.query<AllCategoriesQuery, string>({
      query: () => 'categories/',
    }),
    getProductsBySlug: build.query<IBaseQuery, string>({
      query: (slug) => `category/${slug}/`,
    }),
  }),
})

export const { useGetAllCategoriesQuery, useGetProductsBySlugQuery } =
  categoryApi

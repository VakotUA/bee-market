import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_DOMAIN_URL } from '../../lib/constants'
import { IBaseQuery, AllProductsQuery } from './product.api.types'

export const productApi = createApi({
  reducerPath: 'productApi',
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({ baseUrl: `${API_DOMAIN_URL}/api/v2/` }),
  endpoints: (build) => ({
    getProductDetailById: build.query<IBaseQuery, number>({
      query: (id) => `product/detail/${id}/`,
    }),
    getAllProducts: build.query<AllProductsQuery, string>({
      query: () => `products`,
    }),
  }),
})

export const { useGetProductDetailByIdQuery, useGetAllProductsQuery } =
  productApi

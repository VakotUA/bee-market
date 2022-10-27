import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IBaseQuery, IAllProductsQuery } from './product.api.types'

export const productApi = createApi({
  reducerPath: 'productApi',
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({ baseUrl: `/api/` }),
  endpoints: (build) => ({
    getProductById: build.query<IBaseQuery, string>({
      query: (id) => `product/${id}`,
    }),
    // getProductByCategory: build.query<IBaseQuery, string>({
    //   query: (category) => `category/${category}/product`,
    // }),
    getAllProducts: build.query<IAllProductsQuery, string>({
      query: () => 'product',
    }),
  }),
})

export const {
  useGetProductByIdQuery,
  // useGetProductByCategoryQuery,
  useGetAllProductsQuery,
} = productApi

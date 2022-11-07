import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { userApi } from '../../api/userApi/user.api'
import searchReducer from './reducers/searchSlice'
import modalsReducer from './reducers/modalsSlice'
import { categoryApi } from '../../api/categoryApi/category.api'
import { productApi } from '../../api/productApi/product.api'

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    searchReducer,
    modalsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(categoryApi.middleware)
      .concat(productApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { userApi } from '../../api/userApi/user.api'
import searchReducer from './reducers/searchSlice'
import modalsReducer from './reducers/modalsSlice'

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    searchReducer,
    modalsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

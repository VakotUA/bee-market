import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      return action.payload
    },
  },
})

export default searchSlice.reducer

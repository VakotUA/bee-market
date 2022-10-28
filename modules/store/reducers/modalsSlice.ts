import { createSlice } from '@reduxjs/toolkit'

export const modalsSlice = createSlice({
  name: 'modals',
  initialState: {
    cart: 'close',
    login: 'close',
  },
  reducers: {
    toggleCartModal(state) {
      return { ...state, cart: state.cart === 'open' ? 'close' : 'open' }
    },
    toggleLoginModal(state) {
      return { ...state, login: state.login === 'open' ? 'close' : 'open' }
    },
  },
})

export default modalsSlice.reducer

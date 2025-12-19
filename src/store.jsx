import { configureStore } from '@reduxjs/toolkit'
import userdetail from './features/userDetailSlice.jsx'

export const store = configureStore({
  reducer: userdetail,
})
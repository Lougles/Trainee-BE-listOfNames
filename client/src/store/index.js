import { configureStore } from '@reduxjs/toolkit'
import listSlice from './listReducer'

export const store = configureStore({
  reducer: {
    lists: listSlice,
  },
})



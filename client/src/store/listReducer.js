import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  lists: [],
}

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: (state, action) => {
      return {lists: [...state.lists, action.payload]}
    },
    deleteItem: (state, action) => {
      return {lists: state.lists.filter(i => i.id !== action.payload)}
    },
    addManyItems: (state, action) => { 
      return {lists: [...state.lists, ...action.payload]}
    },
    updateItem: (state, action) => {
      return {lists: state.lists.map(i => i.id === action.payload ? Object.assign(i, action.payload) : i)}
    },
  }
})

export const {addItem, deleteItem, addManyItems} = listSlice.actions

export default listSlice.reducer
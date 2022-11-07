import {addManyItems, addItem, deleteItem} from '../store/listReducer'
import axios from 'axios'
const URL = 'http://localhost:4321/list'

export const fetchManyItems = () => {
  return async (dispatch) => {
    try {
      await axios.get(URL)
      .then(res => dispatch(addManyItems(res.data)))
    } catch (err) {
      throw new Error(err);
    }
  }
}

export const getTodosAsync = () => async (dispatch) => {
  try {
    // console.log(data); 
    const response = await axios.get(URL);
    console.log(response);
    dispatch(addManyItems(response.data));
  } catch (err) {
    throw new Error(err);
  }
}

export const addTodoAsync = (data) => async (dispatch) => {
  try {
    console.log(data);
    const response = await axios.post(URL, data);
    console.log(response);
    dispatch(addItem(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteTodoAsync = (data) => async (dispatch) => {
  try {
    console.log(data);
    const response = await axios.delete(`${URL}/${data}`)
    console.log(response);
    dispatch(deleteItem(response.data));
  } catch (err) {
    throw new Error(err);
  }
}
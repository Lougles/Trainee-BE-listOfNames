import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, deleteItem } from '../store/listReducer';
import {v4} from 'uuid'
import {fetchManyItems} from '../fetchAsync/fetchAllItems'

const List = () => {
const {lists} = useSelector(state => state.lists)
const dispatch = useDispatch();

const handleAdd = (payload) => {
  const user = {
    id: v4(),
    name: payload
  }
  dispatch(addItem(user))
}

const handleRemove = (payload) => {
  dispatch(deleteItem(payload))
}

  return (
    <div>
      <ul>
        { lists.length ?
        lists.map(item => 
            <li key={item._id}>{item.name}
              <button onClick={() => handleRemove(item._id)}>X</button>
            </li>
          )
        :
        <h1>No Students</h1>
        }
      </ul>
      <button onClick={() => handleAdd(prompt())}>+</button>
      <button onClick={() => dispatch(fetchManyItems())}>FETCH</button>
    </div>
  )
}

export default List
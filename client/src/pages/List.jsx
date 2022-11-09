import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addTodoAsync, deleteTodoAsync, fetchManyItems} from '../fetchAsync/fetchAllItems'
import { useEffect } from 'react';
import {ListGroup, Button, Form, FormControl, Badge} from 'react-bootstrap';

const List = () => {
const [flag, setFlag] = useState(false);
const {lists} = useSelector(state => state.lists)
const dispatch = useDispatch();
useEffect(() => {
  dispatch(fetchManyItems())
}, [])

const handleRemove = (payload) => {
  dispatch(deleteTodoAsync(payload))
}

const handleChange = (payload) => {
  // dispatch()
  setFlag(true);
}

const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const nameInput = form.elements.nameInput.value;
  const numberInput = form.elements.numberInput.value;
  const user = {
    name: nameInput,
    rating: numberInput
  }
  dispatch(addTodoAsync(user))
  form.reset();
}

  return (
    <div>
      <ListGroup>
        { lists.length ?
        lists.map(item => 
            <ListGroup.Item key={item._id}>
              <Badge bg="secondary" style={{marginLeft: 20, marginRight: 20}}>{item.name}</Badge>
              <Badge bg="secondary" style={{marginLeft: 20, marginRight: 20}}>{item.rating}</Badge>
              <Button onClick={() => handleChange(item._id)}>Edit</Button>
              <Button variant='danger' onClick={() => handleRemove(item._id)}>X</Button>
            </ListGroup.Item>
          )
        :
        <h1>No Students</h1>
        }
      </ListGroup>
      <Form onSubmit={handleSubmit}>
        <FormControl type='text' name='nameInput'></FormControl>
        <FormControl type='number' name='numberInput'></FormControl>
        <Button variant='dark' type='submit'>Add Item</Button>
      </Form>
      {/* <Button onClick={() => handleAdd(prompt(), prompt())}>+</Button> */}
    </div>
  )
}

export default List
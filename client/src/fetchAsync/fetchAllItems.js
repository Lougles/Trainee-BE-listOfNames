import {addManyItems} from '../store/listReducer'


// fetch('http://localhost:8080/example', {
//             mode: 'no-cors',
//             method: "post",
//             headers: {
//                  "Content-Type": "application/json"
//             },
//             body: JSON.stringify(ob)
//  })

export const fetchManyItems = () => {
  return dispatch => {
    try {
      fetch('http://localhost:4321/list')
      .then(res => res.json())
      .then(json => dispatch(addManyItems(json)))
    } catch (e) {
      console.log(e.message);
    }
  }
}
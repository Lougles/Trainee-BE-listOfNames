import axios from 'axios'
require('dotenv').config()


const $host = axios.create({
  baseURL: 'http://localhost:4321/list'
})


export {
  $host
}
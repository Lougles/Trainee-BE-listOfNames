import {HOME, LIST, AUTH} from '../utils/consts'
import Home from '../pages/Home'
import List from '../pages/List'
import Auth from '../pages/Auth'

export const publicRoutes = [
  {
    path: HOME,
    Component: Home
  },
  {
    path: LIST,
    Component: List
  },
  {
    path: AUTH,
    Component: Auth
  }
]
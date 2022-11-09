import {HOME, LIST, REGISTRATION, LOGIN} from '../utils/consts'
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
    path: REGISTRATION,
    Component: Auth
  },
  {
    path: LOGIN,
    Component: Auth
  }
]
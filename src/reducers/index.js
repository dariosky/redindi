import {combineReducers} from 'redux'
import dindi from './dindi'
import auth from './auth'

const dindiReducer = combineReducers({
  menu:dindi,
  auth: auth,
})

export default dindiReducer

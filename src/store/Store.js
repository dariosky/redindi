import {applyMiddleware, combineReducers, createStore} from 'redux'
import reduxThunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import {routerMiddleware, routerReducer} from 'react-router-redux'
import auth from '../reducers/auth/authReducer'

export const history = createHistory()

const store = createStore(
  combineReducers(
    {
      router: routerReducer,
      auth,
    },
  ),
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    reduxThunk,
    routerMiddleware(history)),
)

export default store

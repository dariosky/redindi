import reducers from '../reducers'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import reduxThunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import {routerMiddleware, routerReducer} from 'react-router-redux'

export const history = createHistory()

const store = createStore(
  // TODO: combine without creating nest
  combineReducers(
    {
      dindi: reducers,
      router: routerReducer,
    },
  ),
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    reduxThunk,
    routerMiddleware(history)),
)

export default store

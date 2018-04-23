import reducer from '../reducers'
import {applyMiddleware, createStore} from 'redux'
import reduxThunk from 'redux-thunk'

const store = createStore(
  reducer, /* preloadedState, */
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(reduxThunk),
)

export default store

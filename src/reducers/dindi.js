import * as actionTypes from '../actions/actionTypes'
import {BrowserRouter} from 'react-router-dom'

const menus = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GOTO_URL:
      console.log('GotoURL:', action)
      return dispatch => {
        BrowserRouter.push(action.url)
      }
    default:
      return state
  }
}

export default menus

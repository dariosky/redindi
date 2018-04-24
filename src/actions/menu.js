import * as actionTypes from './actionTypes'
import {push} from 'react-router-redux'

export function gotoHome() {
  return {
    type: actionTypes.GOTO_URL,
    url: '/',
  }
}

export function gotoUrl(url) {
  return dispatch => {
    dispatch(push(url))
  }
}

import {push} from 'react-router-redux'

export const GOTO_URL = 'goto_url'

export function gotoHome() {
  return {
    type: GOTO_URL,
    url: '/',
  }
}

export function gotoUrl(url) {
  return dispatch => {
    dispatch(push(url))
  }
}


const menus = (state = {position: 'test'}, action) => {
  switch (action.type) {
    
    default:
    return state
  }
}

export default menus

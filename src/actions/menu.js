import * as actionTypes from './actionTypes'

export function gotoHome() {
  return {
    type: actionTypes.GOTO_URL,
    url: '/',
  }
}

export function gotoUrl(url) {
  console.log('Creationg action GOTO_URL', url)
  return {
    type: actionTypes.GOTO_URL,
    url: url,
  }
}

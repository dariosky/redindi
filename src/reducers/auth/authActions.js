import * as api from '../../api'

/* ACTION TYPES */
export const
  AUTH_SET = 'auth_set',
  REGISTER_SET = 'register_set'

/* ACTIONS */

export function authCheck(token) {
  if (!token) {
    token = localStorage.getItem('auth-token')
  }
  return dispatch => {
    api.authCheckStatus(token)
      .then(
        status => dispatch(authSet(status)),
      )
  }
}

export function register(username, password) {
  return dispatch => {
    api.register(username, password)
      .then(
        status => dispatch(registerSet(status)),
      )
  }
}

export function authSet(status) {
  console.log('Got auth status', status)
  return {
    type: AUTH_SET,
    ...status,
  }
}


export function registerSet(status) {
  console.log('Got register response', status)
  return {
    type: REGISTER_SET,
    ...status,
  }
}

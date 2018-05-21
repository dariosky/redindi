import * as api from '../../api'

/* ACTION TYPES */
export const
  AUTH_SET = 'auth_set'

/* ACTIONS */

export function authCheck(token) {
  if (!token) {
    token = localStorage.getItem('auth-token')
  }
  return dispatch => {
    api.authCheckStatus(token)
      .then(
        status => dispatch(authSet(status))
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



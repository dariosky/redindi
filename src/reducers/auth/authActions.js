import * as api from '../../api'

/* ACTION TYPES */
export const
  AUTH_SET = 'auth_set',
  REGISTER_SET = 'register_set',
  STORAGE_TOKEN_KEY = 'access_token'


/* ACTIONS */

function getSavedToken() {
  return localStorage.getItem(STORAGE_TOKEN_KEY)
}

function removeSavedToken() {
  localStorage.removeItem(STORAGE_TOKEN_KEY)
}

export function authCheck(token) {
  return dispatch => {
    api.authCheckStatus(token || getSavedToken())
      .then(
        response => dispatch(authSet(response.data))
      )
      .catch(err => {
        dispatch(authSet({
          user: false,
          error: err.response.data.msg || '',
        }))
      })
  }
}

export function register(username, password) {
  return dispatch => {
    api.register(username, password)
      .then(
        response => dispatch(registerSet(response.data))
      )
      .catch(error => {
        if (error.response && error.response.data)
          dispatch(registerSet(
            error.response.data
          ))
        else alert(error.message)
      })
  }
}

export function authSet(status) {
  console.log('Got auth status', status)
  return {
    type: AUTH_SET,
    ...status
  }
}

export function saveLogin(user) {
  // log in
  console.log('Save login in store an app-mem')
  return dispatch => {
    localStorage.setItem('access_token', user.access_token);
    dispatch(authSet({user}))
  }
}

export function registerSet(status) {
  console.log('Got register response', status)
  if (status.user) {
    return dispatch => dispatch(saveLogin(status.user))
  }
  return {
    type: REGISTER_SET,
    ...status
  }
}

export function login(username, password) {
  return dispatch => {
    api.login(username, password)
      .then(
        response => {
          dispatch(saveLogin(response.data.user))
        }
      )
      .catch(error => {
        if (error.response && error.response.data)
          dispatch(authSet(
            error.response.data
          ))
        else alert(error.message)
      })
  }
}

export function logout(token) {
  return dispatch => {
    removeSavedToken()
    return dispatch(authSet({user: false}))
  }
}

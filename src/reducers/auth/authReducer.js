import * as types from './authActions'
/* REDUCER */

const defaultState = {
  user: null,
}

const auth_set = function (state, action) {
  const {type, ...actionValues} = action // eslint-disable-line no-unused-vars
  return {
    ...state,
    ...actionValues,
  }
}

const register_set = function (state, action) {
  const {type, ...actionValues} = action // eslint-disable-line no-unused-vars
  console.log('Register set', actionValues)
  return {
    ...state,
    register: actionValues,
  }
}


const auth = (state = defaultState, action) => {
  console.log('Action:', action)
  switch (action.type) {
    case types.AUTH_SET:
      return auth_set(state, action)
    case types.REGISTER_SET:
      return register_set(state, action)

    default:
      return state
  }
}

export default auth

import * as types from './authActions'
/* REDUCER */

const defaultState = {
  user: null,
}

const auth = (state = defaultState, action) => {
  console.log('Action:', action)
  switch (action.type) {
    case types.AUTH_SET:
      const {type, ...actionValues} = action // eslint-disable-line no-unused-vars
      return {
        ...state,
        ...actionValues,
      }


    default:
      return state
  }
}

export default auth

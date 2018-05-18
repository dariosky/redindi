

export function authCheckStatus(token) {
  if (!token) return false // no token, we're not logged

  axios.get(`${API.API_BASE}/api/check`, {token})
    .then(response => response.data)
    .then(dataset => dispatch(authSetState(dataset)))
    .catch(err => console.log(err))
}

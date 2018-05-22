import axios from 'axios'
import API from './config'

export function authCheckStatus(token) {
  if (!token) return Promise.resolve({
    user: false,
  }) // no token, we're not logged

  return axios.get(`${API.API_BASE}/api/check`, {token})
    .catch(err => console.log(err))
}

export function register(username, password) {
  return axios.post(`${API.API_BASE}/api/register`,
    {email: username, password})
    .catch(err => console.log(err))
}

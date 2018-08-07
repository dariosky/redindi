import axios from 'axios'
import API from './config'

export function authCheckStatus(token) {
  if (!token) return Promise.resolve({
    data: {
      user: false,
    }
  }) // no token, we're not logged

  return axios.get(`${API.API_BASE}/api/check`,
    {headers: {Authorization: `Bearer ${token}`}})
}

export function register(username, password) {
  return axios.post(`${API.API_BASE}/api/register`,
    {username, password})
}

export function login(username, password) {
  return axios.post(`${API.API_BASE}/api/login`,
    {username, password})
}

export function logout(token) {
  return axios.post(`${API.API_BASE}/api/logout`,
    {token})
}

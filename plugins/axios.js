// plugins/axios.js

import axios from 'axios'

axios.defaults.baseURL = process.env.BASE_URL || 'http://localhost:8000'

axios.interceptors.request.use(config => {
  // Set the Authorization header with a token or bearer token if needed
  // config.headers.Authorization = `Bearer ${token}`
  return config
})

axios.interceptors.response.use(response => {
  return response.data
}, error => {
  // Handle errors here
  return Promise.reject(error)
})

export default axios
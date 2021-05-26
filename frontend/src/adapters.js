const axios = require('axios')
const url = 'http://localhost:8000'

export const login = async (postData) => {
  const loginUrl = url + '/user/login'
  try {
    const result = await axios.post(loginUrl, postData, { withCredentials: true })
    return { status: result.status, data: result.data }
  } catch (err) {
    if (err.response.status === 401) {
      return { status: 'error', data: err.response.data.detail }
    } else {
      console.log(err.message)
    }
  }
}

export const logout = async () => {
  const logoutUrl = url + '/user/logout'
  try {
    const result = await axios.get(logoutUrl, { withCredentials: true })
    return { status: result.status, data: result.data.detail }
  } catch (err) {
    console.log(err.message)
  }
}
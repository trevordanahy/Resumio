import { AUTH_LOGIN, AUTH_LOGOUT } from './auth-actions'

// init state in AuthStateProvider
const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      }
    case AUTH_LOGOUT:
      return {
        ...state,
        user: '',
        isAuthenticated: false
      }
    default:
      return state
  }
}

export default authReducer
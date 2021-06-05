import { LOGIN, REGISTER, LOADING } from './authForm-actions'

const authFormReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        formType: 'Login',
        error: action.error
      }
    case REGISTER:
      return {
        ...state,
        formType: 'Register',
        error: action.error
      }
    case LOADING:
      return {
        ...state,
        formType: 'Loading',
        requestUrl: action.requestUrl,
        requestBody: action.requestBody,
        successCallback: action.successCallback,
        errorCallback: action.errorCallback
      }
    default:
      return state
  }
}

export default authFormReducer
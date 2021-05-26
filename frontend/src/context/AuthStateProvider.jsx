import React, { useReducer} from 'react'
import AuthContext from './auth-context'
import authReducer from './auth-reducer'

const AuthStateProvider = (props) => {
  const initState = {
    user: '',
    isAuthenticated: false
  }

  const [state, dispatch] = useReducer(authReducer, initState)

  return (
    <AuthContext.Provider value={{
      state,
      dispatch
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthStateProvider
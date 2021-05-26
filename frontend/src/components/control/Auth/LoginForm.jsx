import React, {useContext, useState} from 'react'
import {login } from '../../../adapters'
import { AUTH_LOGIN } from '../../../context/auth-actions'
import AuthContext from '../../../context/auth-context'
import { AuthBttn, AuthInput, 
  AuthLabel, ErrorMsg } from '../../style/AuthStyles/AuthFormStyles'

export default function LoginForm() {
  const {dispatch} = useContext(AuthContext)
  const [error, setError] = useState('')
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })

  async function submitHandler(){
    const result = await login(loginData)
    if (result.status === 200){
      dispatch({
        type: AUTH_LOGIN,
        payload: result.data.username
      })
    }else {
      setError(result.data)
    }
  }

  const emailHandler = (e) => {
    setLoginData({...loginData, email: e.target.value})
  }

  const passwordHandler = (e) => {
    setLoginData({...loginData, password: e.target.value})
  }

  return (
    <>
      <h1>Login</h1>
      <AuthLabel htmlFor="email">Email</AuthLabel>
      <AuthInput id="email" onChange={emailHandler} value={loginData.email}/>
      <AuthLabel htmlFor="password">Password</AuthLabel>
      <AuthInput type="password" id="password" 
        onChange={passwordHandler} 
        value={loginData.password}/>
      <ErrorMsg>{error}</ErrorMsg>
      <AuthBttn onClick={submitHandler}>Login</AuthBttn>
    </>
  )
}

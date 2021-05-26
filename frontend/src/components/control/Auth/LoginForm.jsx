import React, {useState} from 'react'
import {login } from '../../../adapters'
import { AuthBttn, AuthInput, 
  AuthLabel, ErrorMsg } from '../../style/AuthStyles/AuthFormStyles'

export default function LoginForm() {
  const [error, setError] = useState('')
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })

  const emailHandler = (e) => {
    setLoginData({...loginData, email: e.target.value})
  }

  const passwordHandler = (e) => {
    setLoginData({...loginData, password: e.target.value})
  }

  return (
    <>
      <h1>Login</h1>
      <AuthLabel for="email">Email</AuthLabel>
      <AuthInput id="email" value={loginData.email}/>
      <AuthLabel for="password">Password</AuthLabel>
      <AuthInput type="password" id="password" value={loginData.password}/>
      <ErrorMsg>{error}</ErrorMsg>
      <AuthBttn>Login</AuthBttn>
    </>
  )
}

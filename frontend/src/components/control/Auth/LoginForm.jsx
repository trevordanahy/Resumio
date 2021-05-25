import React, {useState} from 'react'
import { AuthBttn, AuthInput, AuthLabel, ErrorMsg } from '../../style/AuthStyles/AuthFormStyles'

export default function LoginForm() {
  const [error, setError] = useState('')
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })

  return (
    <>
      <h1>Login</h1>
      <AuthLabel for="email">Email</AuthLabel>
      <AuthInput id="email" />
      <AuthLabel for="password">Password</AuthLabel>
      <AuthInput type="password" id="email" />
      <ErrorMsg>{error}</ErrorMsg>
      <AuthBttn>Login</AuthBttn>
    </>
  )
}

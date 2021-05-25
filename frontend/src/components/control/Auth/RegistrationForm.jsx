import React, {useState} from 'react'
import { AuthLabel, AuthInput, ErrorMsg, AuthBttn } from '../../style/AuthStyles/AuthFormStyles'

export default function RegistrationForm() {
  const [error, setError] = useState('')

  return (
    <>
      <h1>Registration</h1>
      <AuthLabel for="email">Email</AuthLabel>
      <AuthInput id="email"/>
      <AuthLabel for="username">Username</AuthLabel>
      <AuthInput id="username"/>
      <AuthLabel for="password">Password</AuthLabel>
      <AuthInput id="password"/>
      <AuthLabel for="confirmPassword">Confirm Password</AuthLabel>
      <AuthInput id="confirmPassword"/> 
      <ErrorMsg>{error}</ErrorMsg> 
      <AuthBttn>Register</AuthBttn>  
    </>
  )
}

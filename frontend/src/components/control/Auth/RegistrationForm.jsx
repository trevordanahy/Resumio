import React, {useState} from 'react'
import { AuthLabel, AuthInput, 
  ErrorMsg, AuthBttn } from '../../style/AuthStyles/AuthFormStyles'
import {register} from '../../../adapters'

export default function RegistrationForm({switchToLogin}) {
  const [error, setError] = useState('')
  const [regData, setRegData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  })

  const passwordCheck = () => {
    if (regData.password === regData.confirmPassword){
      return true
    }
    return false
  }

  const emailHandler = (e) => {
    setRegData({...regData, email: e.target.value})
  }

  const usernameHandler = (e) => {
    setRegData({...regData, username: e.target.value})
  }

  const passwordHandler = (e) => {
    setRegData({...regData, password: e.target.value})
  }

  const confirmPasswordHandler = (e) => {
    setRegData({...regData, confirmPassword: e.target.value})
  }

  const submitHandler = async () => {
    if (!passwordCheck()){
      setError('Passwords do not match')
      return
    }
    // create object without confirm password key
    const {confirmPassword, ...postData} = regData 
    console.log(postData)
    const result = await register(postData)
    if (result.status === 201){
      switchToLogin()
    }else if (result.status === 409){
      setError(result.data)
    }else {
      console.log(result.data)
    }
  }

  return (
    <>
      <h1>Registration</h1>
      <AuthLabel htmlFor="email">Email</AuthLabel>
      <AuthInput id="email" onChange={emailHandler} value={regData.email}/>
      <AuthLabel htmlFor="username">Username</AuthLabel>
      <AuthInput id="username" onChange={usernameHandler} value={regData.username}/>
      <AuthLabel htmlFor="password">Password</AuthLabel>
      <AuthInput type="password" id="password" onChange={passwordHandler} value={regData.password}/>
      <AuthLabel htmlFor="confirmPassword">Confirm Password</AuthLabel>
      <AuthInput 
        id="confirmPassword" 
        type="password"
        onChange={confirmPasswordHandler} 
        value={regData.confirmPassword}
      /> 
      <ErrorMsg>{error}</ErrorMsg> 
      <AuthBttn onClick={submitHandler}>Register</AuthBttn>  
    </>
  )
}

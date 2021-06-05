import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import { AUTH_LOGIN } from '../../../context/auth-actions'
import AuthContext from '../../../context/auth-context'
import { AuthBttn, AuthInput, 
  AuthLabel, ErrorMsg } from '../../style/AuthStyles/AuthFormStyles'
import { LOADING, LOGIN } from './authForm-actions'

export default function LoginForm({formDispatch, error}) {
  const loginUrl = '/user/login'
  const history = useHistory()
  const {dispatch} = useContext(AuthContext)
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

  /* loginSuccess and loginError will be passed to the loading panel which will to
  be called based on the post response.
  */ 
  const loginSuccess = (res) => {
    dispatch({
      type: AUTH_LOGIN,
      payload: res.username
    })
    history.push('/app')
  }

  const loginError = (error) => {
    if (error.status === 401){
      formDispatch({
        type: LOGIN,
        formType: 'Login',
        error: error.data.detail
      })
    }
    //later revision will forward to general error component
    console.log(error.data.detail)
  }

  
  const submitHandler = (e) =>{
    e.preventDefault()

    formDispatch({
      type: LOADING,
      requestUrl: loginUrl,
      requestBody: loginData,
      successCallback: loginSuccess,
      errorCallback: loginError
    })
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
      <AuthBttn type='submit' onClick={submitHandler}>Login</AuthBttn>
    </>
  )
}

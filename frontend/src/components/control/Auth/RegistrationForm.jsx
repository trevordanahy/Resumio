import React, {useState} from 'react'
import { AuthLabel, AuthInput, 
  ErrorMsg, AuthBttn } from '../../style/AuthStyles/AuthFormStyles'
import { LOADING, LOGIN, REGISTER } from './authForm-actions'

export default function RegistrationForm({formDispatch, error}) {
  const registrationUrl = '/user/register'
  const [regData, setRegData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  })

  const createPostData = () => {
    const {confirmPassword, ...postData} = regData
    return postData
  }

  //Post Callbacks for response handling
  const registrationSuccess = () => {
    formDispatch({
      type: LOGIN,
      formType:'Login',
      error:'',
    })
  }

  const registrationError = (error) =>{
    if (error.status === 401)
    formDispatch({
      type: REGISTER,
      formType: 'Register',
      error: error.data.detail
    })
    //Will be replace by custom error page. 
    console.log(error.data.detail)
  }


//Input Handlers
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
    if (!(regData.password === regData.confirmPassword)){
      formDispatch({
        type: REGISTER,
        formType: 'Register',
        error: 'Passwords do not match.'
      })
      return
    }

    const postData = createPostData()

    formDispatch({
      type: LOADING,
      requestUrl: registrationUrl,
      requestBody: postData,
      successCallback: registrationSuccess,
      errorCallback: registrationError
    })
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

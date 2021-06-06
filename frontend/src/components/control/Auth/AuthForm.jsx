import React from 'react'
import LoadingPanel from '../LoadingPanel'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'


function AuthForm({form, formDispatch}) {

  if (form.formType === 'Login'){
    return (<LoginForm  formDispatch={formDispatch} error={form.error}/>)
  }

  if (form.formType === 'Register'){
    return <RegistrationForm  formDispatch={formDispatch} error={form.error} />
  }

  if (form.formType ==='Loading'){
    return (
    <LoadingPanel 
      method={'post'}
      requestUrl={form.requestUrl}
      requestBody={form.requestBody} 
      successCallback={form.successCallback}
      errorCallback={form.errorCallback}
    />
    )}

  return (
    <div>Error</div>
  )
}

export default AuthForm

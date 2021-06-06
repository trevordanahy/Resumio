import React, {useContext, useState} from 'react'
import AuthContext from '../../context/auth-context'
import { DisplayedUser, UserBoxContainer, UserBttn } from '../style/UserBoxStyles'
import AuthModal from './Auth/AuthModal'
import {logout} from '../../adapters'
import { AUTH_LOGOUT } from '../../context/auth-actions'
import { useHistory } from 'react-router'
import LoadingPanel from './LoadingPanel'

export default function UserBox() {
  const logoutUrl = '/user/logout'
  const history = useHistory()
  const [isOpen, setIsOpen] = useState(false)
  const [loggingOut, setLoggingOut] = useState(false)
  const {state, dispatch} = useContext(AuthContext)

  
  const logoutSuccess = (res) => {
    dispatch({
      type: AUTH_LOGOUT,
    })
    history.push("/")
  }

  const logoutError = (error) =>{
    //Will be replace by custom error page. 
    console.log(error.data.detail)
  }
  

  if (state.isAuthenticated){
    return (
      <UserBoxContainer>
        {loggingOut 
        ?
          <LoadingPanel
            method={'get'}
            requestUrl={logoutUrl}
            requestBody={{}} 
            successCallback={logoutSuccess}
            errorCallback={logoutError}
          />  
        :
        <>
          <DisplayedUser>{state.user}</DisplayedUser>
          <UserBttn onClick={() => setLoggingOut(true)}>Logout</UserBttn>
        </> 
        }
      </UserBoxContainer>
    )
  }
  
  return (
    <>
      <UserBoxContainer>
        <UserBttn onClick={() => setIsOpen(true)}>Login</UserBttn>
        <AuthModal isOpen={isOpen} setIsOpen={setIsOpen}/>
      </UserBoxContainer>
    </>
  )
}

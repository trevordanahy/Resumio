import React, {useContext, useState} from 'react'
import AuthContext from '../../context/auth-context'
import { DisplayedUser, UserBoxContainer, UserBttn } from '../style/UserBoxStyles'
import AuthModal from './Auth/AuthModal'
import {logout} from '../../adapters'
import { AUTH_LOGOUT } from '../../context/auth-actions'
import { useHistory } from 'react-router'

export default function UserBox() {
  const history = useHistory()
  const [isOpen, setIsOpen] = useState(false)
  const {state, dispatch} = useContext(AuthContext)

  const logoutHandler = async () => {
    const result = await logout()
    if (result.status === 200){
      dispatch({
        type: AUTH_LOGOUT,
      })
      history.push("/")
    }
  }
  
  if (state.isAuthenticated){
    return (
      <UserBoxContainer>
        <DisplayedUser>{state.user}</DisplayedUser>
        <UserBttn onClick={logoutHandler}>Logout</UserBttn>
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

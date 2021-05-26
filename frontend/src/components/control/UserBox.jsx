import React, {useContext, useState} from 'react'
import AuthContext from '../../context/auth-context'
import { DisplayedUser, UserBoxContainer, UserBttn } from '../style/UserBoxStyles'
import AuthModal from './Auth/AuthModal'

export default function UserBox() {
  const [isOpen, setIsOpen] = useState(false)
  const {state} = useContext(AuthContext)

  if (state.isAuthenticated){
    return (
      <UserBoxContainer>
        <DisplayedUser>{state.user}</DisplayedUser>
        <UserBttn>Logout</UserBttn>
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

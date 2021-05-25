import React, {useState} from 'react'
import { DisplayedUser, UserBoxContainer, UserBttn } from '../style/UserBoxStyles'
import AuthModal from './Auth/AuthModal'

export default function UserBox() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <UserBoxContainer>
        <UserBttn onClick={() => setIsOpen(true)}>Login</UserBttn>
        <AuthModal isOpen={isOpen} setIsOpen={setIsOpen}/>
      </UserBoxContainer>
    </>
  )
}

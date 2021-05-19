import React from 'react'
import { DisplayedUser, UserBoxContainer, UserBttn } from '../style/UserBoxStyles'


export default function UserBox() {
  return (
    <>
      <UserBoxContainer>
        <DisplayedUser>Test</DisplayedUser>
        <UserBttn>Login</UserBttn>
      </UserBoxContainer>
    </>
  )
}

import React from 'react'
import { PageTitle, StyledHeader } from '../style/HeaderStyles'
import UserBox from './Auth/UserBox'

export default function Header() {
  return (
    <StyledHeader>
      <PageTitle>Resumio</PageTitle>
      <UserBox />
    </StyledHeader>
  )
}

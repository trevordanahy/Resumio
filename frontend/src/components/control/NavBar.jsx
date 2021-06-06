import React from 'react'
import { StyledNav, StyledLink } from '../style/NavStyles'

export default function NavBar() {
  return (
    <StyledNav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/app">App</StyledLink>
    </StyledNav>
  )
}

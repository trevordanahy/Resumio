import React from 'react'
import { StyledNav, NavA, StyledLink } from '../style/NavBarStyles'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <StyledNav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/app">App</StyledLink>
    </StyledNav>
  )
}

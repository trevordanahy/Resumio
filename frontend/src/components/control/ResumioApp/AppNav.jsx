import React from 'react'
import {StyledAppNav, AppLink} from '../../style/NavStyles'

export default function AppNav() {
  return (
    <StyledAppNav>
      <AppLink to="/app/input">Input</AppLink>
      <AppLink to="/app/output">Output</AppLink>
      <AppLink to="/app/themes">Theme</AppLink>
    </StyledAppNav>
  )
}

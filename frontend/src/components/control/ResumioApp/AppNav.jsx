import React from 'react'
import {StyledAppNav, AppLink, AppNavLinkContainer} from '../../style/ResumioApp/AppNavStyles'

export default function AppNav() {
  return (
    <StyledAppNav>
      <AppNavLinkContainer>
        <AppLink to="/app/input">Input</AppLink>
      </AppNavLinkContainer>
      <AppNavLinkContainer>
        <AppLink to="/app/output">Output</AppLink>
      </AppNavLinkContainer>
    </StyledAppNav>
  )
}

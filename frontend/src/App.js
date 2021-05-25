import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './themes'
import { StyledHeader, PageTitle } from './components/style/HeaderStyles'
import UserBox from './components/control/UserBox'
import { StyledMain } from './components/style/MainStyles'
import { StyledFooter } from './components/style/FooterStyles'
import AuthStateProvider from './context/AuthStateProvider'


function App() {
  const [isDark, setIsDark] = useState(true)

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <AuthStateProvider>
          <StyledHeader>
            <PageTitle>Resumio</PageTitle>
            <UserBox />
          </StyledHeader>
          <StyledMain />
        </AuthStateProvider>
        <StyledFooter />
      </ThemeProvider>
    </>
  );
}

export default App;

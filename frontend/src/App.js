import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './themes'
import { StyledHeader, PageTitle } from './components/style/HeaderStyles'
import UserBox from './components/control/UserBox'
import { StyledMain } from './components/style/MainStyles'
import { StyledFooter } from './components/style/FooterStyles'


function App() {
  const [isDark, setIsDark] = useState(true)

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <StyledHeader>
          <PageTitle>Test</PageTitle>
          <UserBox />
        </StyledHeader>
        <StyledMain />
        <StyledFooter />
      </ThemeProvider>
    </>
  );
}

export default App;

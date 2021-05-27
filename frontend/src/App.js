import React, { useState } from 'react'
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './themes'
import { StyledHeader, PageTitle } from './components/style/HeaderStyles'
import UserBox from './components/control/UserBox'
import { StyledMain } from './components/style/MainStyles'
import { StyledFooter } from './components/style/FooterStyles'
import AuthStateProvider from './context/AuthStateProvider'
import Homepage from './components/control/Homepage'
import Editor from './components/control/ResumioApp'
import ResumioApp from './components/control/ResumioApp'


function App() {
  const [isDark, setIsDark] = useState(true)

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <AuthStateProvider>
          <Switch>
            <StyledHeader>
              <PageTitle>Resumio</PageTitle>
              <UserBox />
            </StyledHeader>
            <StyledMain>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/app">
                <ResumioApp />
              </Route>
            </StyledMain>
          </Switch>
        </AuthStateProvider>
        <StyledFooter />
      </ThemeProvider>
    </>
  );
}

export default App;

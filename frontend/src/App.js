import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './themes'
import { getCurrentUser } from './adapters'
import Header from './components/control/Header'
import Main from './components/control/Main'
import { StyledFooter } from './components/style/FooterStyles'
import AuthContext from './context/auth-context'
import { AUTH_LOGIN } from './context/auth-actions'
import NavBar from './components/control/NavBar'


function App() {
  const history = useHistory()
  const { dispatch } = useContext(AuthContext)
  const [isDark, setIsDark] = useState(true)

  const checkLoginOnLaunch = async () => {
    try {
      const newUser = await getCurrentUser()
      if (newUser) {
        dispatch({
          type: AUTH_LOGIN,
          payload: newUser
        })
        history.push("/app")
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    checkLoginOnLaunch()
  }, [])

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Header />
        <NavBar />
        <Main />
        <StyledFooter />
      </ThemeProvider>
    </>
  );
}

export default App;

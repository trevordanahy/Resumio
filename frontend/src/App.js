import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './themes'
import Header from './components/control/Header'
import Main from './components/control/Main'
import { StyledFooter } from './components/style/FooterStyles'
import AuthContext from './context/auth-context'
import { AUTH_LOGIN } from './context/auth-actions'
import NavBar from './components/control/NavBar'
import useAxios from './hooks/useAxios'


function App() {
  const history = useHistory()
  const { dispatch } = useContext(AuthContext)
  const [isDark, setIsDark] = useState(true)

  const { loading, res, error } = useAxios(
    {
      method: 'get',
      url: '/user/me',
      withCredentials: true
    }
  )

  /* useEffect hook syncs the state of login check above to 
  Auth global state. */
  useEffect(() => {
    if (res) {
      dispatch({
        type: AUTH_LOGIN,
        payload: res.username
      })
      history.push('/app')
    }
  }, [res])

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

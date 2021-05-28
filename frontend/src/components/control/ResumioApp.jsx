import React, { useContext } from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import AuthContext from '../../context/auth-context'
import AppNav from './AppNav/AppNav'
import InputApp from './InputApp/InputApp'
import OutputApp from './OutputApp/OutputApp'
import ThemeApp from './ThemeApp/ThemeApp'


export default function ResumioApp() {
  const {state} = useContext(AuthContext)

  if (!state.isAuthenticated){
    return (<Redirect to="/"/>)
  }
  return (
    <> 
      <AppNav />
      <Switch>  
        <div>
          <Route path="/app/input">
            <InputApp />
          </Route>
          <Route path="/app/output">
            <OutputApp />
          </Route>
          <Route path="/app/themes">
            <ThemeApp />
          </Route>
        </div>
      </Switch>
    </>
    
  )
}

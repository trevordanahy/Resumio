import React, { useContext } from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import AuthContext from '../../../context/auth-context'
import AppNav from './AppNav'
import InputApp from '../ResumioApp/InputApp/InputApp'
import OutputApp from '../ResumioApp/OutputApp/OutputApp'
import ThemeApp from '../ResumioApp/ThemeApp/ThemeApp'


export default function ResumioApp() {
  const {state} = useContext(AuthContext)

  if (!state.isAuthenticated){
    return (<Redirect to="/"/>)
  }
  return (
    <> 
      <AppNav />
      <Switch>  
        <>
          <Route path="/app/input">
            <InputApp />
          </Route>
          <Route path="/app/output">
            <OutputApp />
          </Route>
          <Route path="/app/themes">
            <ThemeApp />
          </Route>
        </>
      </Switch>
    </>
    
  )
}

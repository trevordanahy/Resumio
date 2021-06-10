import React, { useState, useContext } from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import AuthContext from '../../../context/auth-context'
import AppNav from './AppNav'
import InputApp from '../ResumioApp/InputApp/InputApp'
import OutputApp from '../ResumioApp/OutputApp/OutputApp'
import DraftList from './DraftSelector/DraftList'
import LoadingPanel from '../LoadingPanel'


export default function ResumioApp() {
  const {state} = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  const [drafts, setDrafts] = useState([])
  const [currentDraft, setCurrentDraft] = useState({})
  const getDraftsUrl = '/app/drafts'

  const getDraftsSuccess = (newList) => {
    setDrafts(newList)
    setLoading(false)
  }

  const getDraftsError = (error) => {
    console.log(error)
    setLoading(false)
  } 

  if (!state.isAuthenticated){
    return (<Redirect to="/"/>)
  }

  if(loading){
    return (
      <LoadingPanel
        method={'get'}
        requestUrl={getDraftsUrl}
        requestBody={{}} 
        successCallback={getDraftsSuccess}
        errorCallback={getDraftsError}
      />
    )
  }

  return (
    <> 
      <AppNav />
      <Switch>  
        <>
          <Route path="/app/input">
            <>
              <DraftList drafts={drafts} setCurrentDraft={setCurrentDraft} />
              <InputApp currentDraft={currentDraft} setCurrentDraft={setCurrentDraft} />
            </>  
          </Route>
          <Route path="/app/output">
            <>
              <DraftList drafts={drafts} setCurrentDraft={setCurrentDraft} />
              <OutputApp currentDraft={currentDraft} />
            </>
          </Route>
        </>
      </Switch>
    </>
    
  )
}

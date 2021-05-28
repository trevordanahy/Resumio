import React, { useContext } from 'react'
import {Redirect} from 'react-router-dom'
import { TempDiv } from '../style/MainStyles'
import AuthContext from '../../context/auth-context'


export default function ResumioApp() {
  const {state} = useContext(AuthContext)
  console.log('res app')

  if (!state.isAuthenticated){
    return (<Redirect to="/"/>)
  }
  return (
    <TempDiv>
      This App is soo cool.
    </TempDiv>
  )
}

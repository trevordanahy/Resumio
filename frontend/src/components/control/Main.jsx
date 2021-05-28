import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { StyledMain } from '../style/MainStyles'
import Homepage from './Homepage'
import ResumioApp from './ResumioApp'
import About from './About'


export default function Main() {
  return (
    <StyledMain>
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route exact path='/app'>
          <ResumioApp  />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </StyledMain>
  )
}

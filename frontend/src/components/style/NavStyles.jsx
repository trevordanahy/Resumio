import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const StyledNav = styled.nav`
  width: 100%;
  background: ${props => props.theme.main};
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
`

export const StyledLink = styled(Link)`
  color: ${props => props.theme.lightShade};
  margin: 10px;
`

export const StyledAppNav = styled.div`
  width: 50%;
  min-width: 250px;
  height: auto;
  background: ${props => props.theme.secondaryAccent};
  font-size: 1rem;
  border-radius: 10px;
  margin: 10px 0px;
  display: flex;
  justify-content: space-between;
`

export const AppLink = styled(Link)`
  color: ${props => props.theme.mainShade};
  margin: 0px 10px;
`
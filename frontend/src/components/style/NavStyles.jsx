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


import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const StyledAppNav = styled.div`
  width: 90%;
  min-width: 250px;
  height: auto;
  background: ${props => props.theme.secondaryAccent};
  font-size: 1rem;
  border-radius: 0px 0px 5px 5px;
  margin: 0px;
  padding: 10px;
  display: flex;
`

export const AppNavLinkContainer = styled.div`
  border: 2px ${props => props.theme.mainShade};
  flex-grow: 1;
  display: flex;
  justify-content: center;
` 

export const AppLink = styled(Link)`
  color: ${props => props.theme.mainShade};
  margin: 0px 10px;
  font-size: 1.25em;
`
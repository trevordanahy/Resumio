import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  height: auto;
  background: ${props => props.theme.main};
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

export const PageTitle = styled.h1`
  color: ${props => props.theme.lightShade};
  margin: 10px;
  font-size: 2rem;
  align-self: center;
`
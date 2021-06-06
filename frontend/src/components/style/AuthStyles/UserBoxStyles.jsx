import styled from 'styled-components'

export const UserBoxContainer = styled.div`
  height: 100%;
  display: flex;
  color: ${props => props.theme.lightShade};
  flex-direction: column;
  align-self: flex-end;
  justify-content: flex-end;
`

export const UserBttn = styled.button`
  margin: 3px 3vw 10px 3px;
  padding: 2px;
  background: ${props => props.theme.lightShade};
`
export const DisplayedUser = styled.h2`
  color: ${props => props.theme.lightShade};
  margin: 3px 3vw 3px 3px;
  font-size: 1rem;
`
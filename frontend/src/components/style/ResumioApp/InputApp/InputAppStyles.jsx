import styled from 'styled-components'

export const NewDraftBttn = styled.button`
  width: 91%;
  background: ${props => props.theme.secondaryAccent};
  color: ${props => props.theme.mainShade};
  padding: 5px;
  font-size: 1em;
  display: flex;
  justify-content: center;
  border-radius: 5px;
`
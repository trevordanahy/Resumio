import styled from 'styled-components'

export const DraftsContainer = styled.div`
  width: 90%;
  background: ${props => props.theme.mainShade};
  margin-top: 10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-content: flex-end;
`

export const DraftTab = styled.button`
  background: ${props => props.theme.main};
  color: ${props => props.theme.lightAccent};
  font-size: 1em;
  padding: 3px;
  border-radius: 10px 10px 2px 2px;
  margin: 1px;
`
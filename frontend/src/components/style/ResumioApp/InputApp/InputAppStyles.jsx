import styled from 'styled-components'

export const DraftTitle = styled.h2`
  width: 90%;
  background: ${props => props.theme.mainShade};
  color: ${props => props.theme.secondaryShade};
  margin: 5px 0px 10px 0px;
`

export const DraftTitleInput = styled.input`
  width: 90%;
  background: ${props => props.theme.mainShade};
  color: ${props => props.theme.secondaryShade};
  margin: 5px 0px 10px 0px;
`

export const InputForm = styled.form`
  width: 90%;
  min-height: 70vh;
  background: ${props => props.theme.mainShade};
  color: ${props => props.theme.secondaryShade};
  border: 1px dashed ${props => props.theme.secondaryAccent};
  border-radius: 5px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`







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

export const StyledResumioSection = styled.div`
  width: 90%;
  height: auto;
  background: ${props => props.theme.secondaryShade};
  color: ${props => props.theme.mainShade};
  margin: 10px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`


export const ResumioSectionTitle = styled.h3`
  width:100%;
  color: ${props => props.theme.mainShade};
`

export const ResumioLabel = styled.label`
  color: ${props => props.theme.mainShade};
`
export const ResumioInput = styled.input`
  width: 50%;
`


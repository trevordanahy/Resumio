import styled from 'styled-components'

export const SectionContainer = styled.div`
  width: 90%;
  height: auto;
  background: ${props => props.theme.mainAccent};
  color: ${props => props.theme.mainShade};
  border: 1px solid ${props => props.theme.secondaryAccent};
  margin: 10px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`
export const SectionTitle = styled.h3`
  width:100%;
  color: ${props => props.theme.secondaryShade};
  justify-self: center;
`

export const SectionFieldset = styled.fieldset`
  width: 90%;
  height: auto;
  background: ${props => props.theme.mainAccent};
  border-top-width: 1px; 
  border-top-style: solid;
  border-top-color: ${props => props.theme.secondaryAccent};
  border-right-style: hidden;
  border-left-style: hidden;
  margin: 0px 5px 10px 0px;;
  display: flex;
  flex-flow: column wrap;
`

export const SectionLegend = styled.legend`
  width: auto;
  margin-left: auto;
  margin-right: auto;
  color: ${props => props.theme.secondaryShade};
  
`

export const ResumioLabel = styled.label`
  color: ${props => props.theme.secondaryShade};
  margin: 2px 2px 2px 10px;
  align-self: flex-start;
`
export const ResumioInput = styled.input`
  max-width: 80%;
  min-width: 40%;
  margin: 0px 5px 10px 10px;
`

export const ResumioTextArea = styled.textarea`
  max-width: 80%;
  min-width: 40%;
  margin: 0px 5px 10px 10px;
`
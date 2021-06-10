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
  align-items: center;
`
export const SectionTitle = styled.h3`
  width:100%;
  color: ${props => props.theme.secondaryShade};
`

export const ResumioLabel = styled.label`
  color: ${props => props.theme.mainShade};
`
export const ResumioInput = styled.input`
  width: 50%;
`
import styled from 'styled-components'

export const StyledList = styled.ul`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`

export const SectionContainer = styled.div`
  width: 95%;
  height: auto;
  background: ${props => props.theme.mainAccent};
  color: ${props => props.theme.mainShade};
  border: 1px solid ${props => props.theme.secondaryAccent};
  margin: 10px;
  display: flex;
  flex-flow: row nowrap;
`
export const DragHandle = styled.div`
  height: 100%;
  min-width: 10%;
  font-weight: bold;
  font-size: 2rem;
  color: ${props => props.theme.secondaryShade};
  justify-self: center;
  align-self: center;
  padding: 5px;
`
export const ContentContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  margin: 10px;
`

export const TitleBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-content: center;
`

export const Title = styled.h3`
  font-size: 1.5em;
  color: ${props => props.theme.secondaryShade};
`

export const Chevron = styled.div`
  font-size: 1.5em;
  color: ${props => props.theme.secondaryAccent };
  margin-left: auto;
  margin-right: 5px;
`

export const SectionContent = styled.div`
  width: 100%;
  display: ${props => props.showSection ? 'flex' : 'none'};
  flex-flow: column nowrap;
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
  align-self: center;
`

export const SectionLegend = styled.legend`
  width: auto;
  margin-left: auto;
  margin-right: auto;
  color: ${props => props.theme.secondaryShade};
`
export const SubSectionTitle = styled.h5`
  color: ${props => props.theme.secondaryShade};
  margin: 2px 2px 2px 10px;
  align-self: flex-start;
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
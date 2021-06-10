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

export const DraftTitle = styled.h2`
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

export const SectionList = styled.ul`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`





import styled from 'styled-components'

export const AppSection = styled.section`
  width: 90%;
  min-height: 70vh;
  color: ${props => props.theme.secondaryShade};
  border: 2px solid ${props => props.theme.secondaryShade};
  display: flex;
`
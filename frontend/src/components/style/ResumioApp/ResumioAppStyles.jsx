import styled from 'styled-components'

export const AppSection = styled.section`
  width: 90%;
  min-height: 70vh;
  color: ${props => props.theme.secondaryShade};
  border-width: 1px;
  border-style: hidden solid;
  border-color: ${props => props.theme.secondaryAccent};
  margin-top: 10px;
  display: flex;
`
import styled from 'styled-components'

export const StyledMain = styled.main`
  width: 100%;
  min-height: 120vh;
  background: ${props => props.theme.mainShade};
  display: flex;
  flex-flow: row wrap;
`

export const TempDiv = styled.div`
  color: ${props => props.theme.secondaryShade};
  height: auto;
  background: 'navy';
`
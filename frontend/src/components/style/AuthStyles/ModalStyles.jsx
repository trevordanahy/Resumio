import styled from 'styled-components'

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.6);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
`

export const Modal = styled.div`
  max-height: auto;
  max-width: 50%;
  min-width: 200px;
  position: relative;
`

export const FormSelect = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  flex: 1;
`

export const FormBttn = styled.button`
  background-color: ${props => props.theme.main};
  padding: 5px;
  color: ${props => props.theme.lightShade};
  border: black;
  border-style: solid;
  `

export const Form = styled.div`
  padding: 0px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.lightShade};
  border-radius: 0px 0px 20px 20px;
  border: black;
  border-style: solid;
`

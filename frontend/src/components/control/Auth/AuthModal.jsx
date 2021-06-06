import React, {useReducer, useRef} from 'react'
import { Background, Modal, 
  FormSelect, FormBttn,Form } from '../../style/AuthStyles/ModalStyles'
import AuthForm from './AuthForm'
import authFormReducer from './authForm-reducer'


function AuthModal({isOpen, setIsOpen}) {
  const backgroundRef = useRef()
  const initFormState = {
    formType: 'Login',
    error: '',
    requestData: null,
    successCallback: null,
    errorCallback: null
  }

  const [form, formDispatch] = useReducer(authFormReducer, initFormState)
  
  const closeModal = e => {
    if (backgroundRef.current === e.target) {
      setIsOpen(false)
    }
  }

  if (!isOpen) return null

  return (
    <Background onClick={closeModal} ref={backgroundRef} >
      <Modal>
        <FormSelect>
          <FormBttn onClick={() => formDispatch({type: 'LOGIN', error: ''})}>Login</FormBttn>
          <FormBttn onClick={() => formDispatch({type: 'REGISTER', error: ''})}>Register</FormBttn>
        </FormSelect>
        <Form>
          <AuthForm form={form} formDispatch={formDispatch} />
        </Form>
      </Modal>
    </Background>
  )
}

export default AuthModal

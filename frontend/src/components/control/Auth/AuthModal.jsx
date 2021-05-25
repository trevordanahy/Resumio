import React, {useRef, useState} from 'react'
import { Background, Modal, 
  FormSelect, FormBttn,Form } from '../../style/AuthStyles/ModalStyles'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'

function AuthModal({isOpen, setIsOpen}) {
  const backgroundRef = useRef()
  const [isLoginForm, setIsLoginForm] = useState(true)

  const switchToLogin = () => {
    setIsLoginForm(true)
  }

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
          <FormBttn onClick={() => setIsLoginForm(true)} />
          <FormBttn onClick={() => setIsLoginForm(false)} />
        </FormSelect>
        <Form>
          {isLoginForm 
          ? (<LoginForm />)
          : (<RegistrationForm switchToLogin={switchToLogin} />)}
        </Form>
      </Modal>
    </Background>
  )
}

export default AuthModal

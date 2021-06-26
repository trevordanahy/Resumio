import React, {useRef, useState} from 'react'
import { newBlankDraft } from '../InputApp/NewSections/new_sections'
import {DraftTitleInput} from '../../../style/ResumioApp/InputApp/InputAppStyles'
import {
  Background,
  WideModal,
  ModalTitle,
  WideForm,
  FormBttn
  }from '../../../style/ModalStyles'

function CreateDraftModal({isOpen, setIsOpen, drafts, setDrafts, setCurrentDraft}) {
  const background = useRef()
  const [draftTitle, setDraftTitle] = useState('')
  const [error, setError] = useState(false)

  const titleHandler = e => {
    setDraftTitle(e.target.value)
  }

  const closeModal = e => {
    if (background.current === e.target) {
      setError(false)
      setIsOpen(false)
    }
  }

  const checkForUnsavedDrafts = () =>{
    if(drafts[drafts.length -1]['_id'] === 'temp'){
      return true
    }
    return false
  }
  

  const createDraft =(newTitle) => {
    if (checkForUnsavedDrafts()){
      setError(true)
      return
    }
    const newDraft = {...newBlankDraft, title: newTitle, _id: 'temp' }
    setDrafts([...drafts, newDraft])
    setIsOpen(false)
  }


  if(!isOpen){
    return null
  }

  return (
    <Background onClick={closeModal} ref={background}>
      <WideModal>
        {error ? 
          <div>
            Only One Unsaved Draft can exist at one time.
            Please save or discard the unsaved draft. 
          </div> 
          :
          <>
            <ModalTitle>Create Draft</ModalTitle>
            <WideForm >
              <DraftTitleInput onChange={titleHandler} placeholder='Enter Draft Name' />
              <FormBttn onClick={() => createDraft(draftTitle)}>Submit</FormBttn>
            </WideForm>
          </>
        }
      </WideModal>
    </Background>
  )
}

export default CreateDraftModal

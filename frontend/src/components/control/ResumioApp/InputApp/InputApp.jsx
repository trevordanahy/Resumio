import React, { useState } from 'react'
import { NewDraftBttn } from '../../../style/ResumioApp/InputApp/InputAppStyles'
import { AppSection } from '../../../style/ResumioApp/ResumioAppStyles'
import DraftList from '../DraftSelector/DraftList'


export default function InputApp() {
  const [currentDraft, setCurrentDraft] = useState({})

  const blankDraft = {
    title: '',
    resume: [],
    created: '',
    modified: ''
  }
  
  return (
    <>
      
      <DraftList setCurrentDraft={setCurrentDraft} />
      <NewDraftBttn onClick={()=> setCurrentDraft(blankDraft)}>+ New Draft</NewDraftBttn>
      <AppSection>
        Input App
      </AppSection>
    </>
    
  )
}

import React from 'react'
import { NewDraftBttn } from '../../../style/ResumioApp/InputApp/InputAppStyles'
import { AppSection } from '../../../style/ResumioApp/ResumioAppStyles'



export default function InputApp({setCurrentDraft}) {
  return (
    <>
      <NewDraftBttn onClick={()=> setCurrentDraft({})}>+ New Draft</NewDraftBttn>
      <AppSection>
        Input App
      </AppSection>
    </>
    
  )
}

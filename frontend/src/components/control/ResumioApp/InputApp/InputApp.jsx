import React from 'react'
import { AppSection } from '../../../style/ResumioApp/ResumioAppStyles'
import { InputForm, 
  SectionList,
  NewDraftBttn, 
  DraftTitle} from '../../../style/ResumioApp/InputApp/InputAppStyles'
import ResumioSection from './ResumioSection'



export default function InputApp({currentDraft, setCurrentDraft}) {

  //check if currentDraft is empty
  if (Object.keys(currentDraft).length === 0){
    return <h2>Please select a draft</h2>
  }



  return (
    <>
      <NewDraftBttn onClick={()=> setCurrentDraft({})}>+ New Draft</NewDraftBttn>
      <AppSection>
        <DraftTitle>{currentDraft.title}</DraftTitle>
        <InputForm>
          <SectionList>
            {currentDraft.resume.map((section) => {
              return (
                <ResumioSection key={Object.keys(section)[0]} section={section} />
              )
            } )}
          </SectionList>
        </InputForm>
      </AppSection>
    </>
    
  )
}

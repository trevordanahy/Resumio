import React from 'react'
import { InputForm, ResumioSectionTitle, StyledResumioSection, NewDraftBttn } from '../../../style/ResumioApp/InputApp/InputAppStyles'
import { AppSection } from '../../../style/ResumioApp/ResumioAppStyles'



export default function InputApp({currentDraft, setCurrentDraft}) {

  const capitalize = (word) => {
    const lower = word.toLowerCase()
    return word.charAt(0).toUpperCase() + lower.slice(1)
  }

  const getSectionTitle = (sectionObj) =>{
    const keys = Object.keys(sectionObj)
    const uncapTitle = keys[0] 
    const sectionTitle = capitalize(uncapTitle)
    return sectionTitle
  }

  //check if obj is empty
  if (Object.keys(currentDraft).length === 0){
    return <h2>Please select a draft</h2>
  }

  
  return (
    <>
      <NewDraftBttn onClick={()=> setCurrentDraft({})}>+ New Draft</NewDraftBttn>
      <AppSection>
        <InputForm>
          <ul>
            {currentDraft.resume.map((section) => {
              return (
                <StyledResumioSection>
                  <ResumioSectionTitle>{getSectionTitle(section)}</ResumioSectionTitle>
                </StyledResumioSection>
              )
            } )}
          </ul>
        </InputForm>
      </AppSection>
    </>
    
  )
}

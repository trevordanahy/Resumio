import React from 'react'
import { AppSection } from '../../../style/ResumioApp/ResumioAppStyles'
import { InputForm, 
  SectionList, 
  ResumioSectionTitle, 
  StyledResumioSection, 
  NewDraftBttn, 
  DraftTitle} from '../../../style/ResumioApp/InputApp/InputAppStyles'



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
        <DraftTitle>{currentDraft.title}</DraftTitle>
        <InputForm>
          <SectionList>
            {currentDraft.resume.map((section) => {
              return (
                <StyledResumioSection>
                  <ResumioSectionTitle>{getSectionTitle(section)}</ResumioSectionTitle>
                </StyledResumioSection>
              )
            } )}
          </SectionList>
        </InputForm>
      </AppSection>
    </>
    
  )
}

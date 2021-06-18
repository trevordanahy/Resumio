import React from 'react'
import { AppSection } from '../../../style/ResumioApp/ResumioAppStyles'
import { InputForm, 
  SectionList,
  NewDraftBttn, 
  DraftTitle} from '../../../style/ResumioApp/InputApp/InputAppStyles'
import ResumioSection from './ResumioSection'
import { useForm, FormProvider } from 'react-hook-form'



export default function InputApp({currentDraft, setCurrentDraft}) {
  const formMethods = useForm()
  
  const onSubmit = data => console.log(data)

  //check if currentDraft is empty
  if (Object.keys(currentDraft).length === 0){
    return <h2>Please select a draft</h2>
  }

  return (
    <>
      <NewDraftBttn onClick={()=> setCurrentDraft({})}>+ New Draft</NewDraftBttn>
      <AppSection>
        <DraftTitle>{currentDraft.title}</DraftTitle>
        <FormProvider {...formMethods}>
          <InputForm onSubmit={formMethods.handleSubmit(onSubmit)}>
            <SectionList>
              {currentDraft.resume.map((section, index) => {
                return (
                  <ResumioSection key={Object.keys(section)[0]} section={section} resumeIndex={index} />
                )
              })}
            </SectionList>
            <button type='submit'>Submit</button>
          </InputForm>
        </FormProvider>
      </AppSection>
    </>
    
  )
}

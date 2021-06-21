import React from 'react'
import { AppSection } from '../../../style/ResumioApp/ResumioAppStyles'
import { InputForm, 
  SectionList,
  NewDraftBttn, 
  DraftTitle} from '../../../style/ResumioApp/InputApp/InputAppStyles'
import ResumioSection from './ResumioSection'
import { useForm, FormProvider } from 'react-hook-form'
import { DragDropContext, Droppable } from "react-beautiful-dnd"


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
            <DragDropContext>
              <Droppable droppableId='inputForm'>
                {(provided, snapshot) => (
                  <SectionList 
                    ref={provided.innerRef} 
                    {...provided.droppableProps}
                    style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
                  >
                      {currentDraft.resume.map((section, index) => {
                        const sectionType = Object.keys(section)[0]
                        return (
                          <ResumioSection 
                            key={sectionType}
                            sectionType={sectionType} 
                            section={section} 
                            resumeIndex={index} 
                          />
                        )
                      })}
                      {provided.placeholder}
                  </SectionList>
                )}
              </Droppable>
            </DragDropContext>
            <button type='submit'>Submit</button>
          </InputForm>
        </FormProvider>
      </AppSection>
    </>
    
  )
}

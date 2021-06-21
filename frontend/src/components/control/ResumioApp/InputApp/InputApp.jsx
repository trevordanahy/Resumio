import React from 'react'
import { AppSection } from '../../../style/ResumioApp/ResumioAppStyles'
import { InputForm, 
  NewDraftBttn, 
  DraftTitle} from '../../../style/ResumioApp/InputApp/InputAppStyles'
import SectionList from './SectionList'
import { useForm, FormProvider } from 'react-hook-form'
import { DragDropContext,  } from "react-beautiful-dnd"


export default function InputApp({currentDraft, setCurrentDraft}) {
  const formMethods = useForm()
  const onSubmit = data => console.log(data)

  function reorderArray(array, startIndex, endIndex){
    const newArray = Array.from(array)
    const [movedItem] = newArray.splice(startIndex, 1)
    newArray.splice(endIndex, 0 , movedItem)
    return newArray
  }

  function onDragEnd(result){
    if (!result.destination) {
      return;
    }

    console.log(currentDraft.resume)

    const reorderedResume = reorderArray(
        currentDraft.resume, 
        result.source.index, 
        result.destination.index)
    
    console.log(reorderedResume)
    setCurrentDraft({...currentDraft, resume:reorderedResume})
  }

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
            <DragDropContext onDragEnd={onDragEnd}>
              <SectionList currentDraft={currentDraft} />
            </DragDropContext>
            <button type='submit'>Submit</button>
            <button onClick={()=> setCurrentDraft(
              {...currentDraft, resume:[currentDraft['resume'][0]]})
            }>
              Test
            </button>
          </InputForm>
        </FormProvider>
      </AppSection>
    </>
    
  )
}

import React, {useState} from 'react'
import SectionList from './SectionList'
import { AppSection } from '../../../style/ResumioApp/ResumioAppStyles'
import { useForm, FormProvider } from 'react-hook-form'
import { DragDropContext,  } from "react-beautiful-dnd"
import { 
  InputForm, 
  NewDraftBttn, 
  DraftTitle,
  DraftTitleInput
  } from '../../../style/ResumioApp/InputApp/InputAppStyles'


export default function InputApp({currentDraft, setCurrentDraft, drafts, setDrafts}) {
  const [editTitle, setEditTitle] = useState(false)
  const formMethods = useForm()


  const onSubmit = () => console.log(currentDraft)

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

    const reorderedResume = reorderArray(
        currentDraft.resume, 
        result.source.index, 
        result.destination.index)
    
    setCurrentDraft({...currentDraft, resume:reorderedResume})
  }

  //check if currentDraft is empty
  if (Object.keys(currentDraft).length === 0){
    return <h2>Please select a draft</h2>
  }

  return (
    <>
      <AppSection>
        <DraftTitle>
          {editTitle ? 
            <DraftTitleInput placeholder={currentDraft.title}/> 
            : currentDraft.title
          }
        </DraftTitle>
        <button 
          onClick={() => setEditTitle(!editTitle)}>{editTitle ? 'Save': 'Edit'}
        </button>
        <FormProvider {...formMethods}>
          <InputForm onSubmit={formMethods.handleSubmit(onSubmit)}>
            <DragDropContext onDragEnd={onDragEnd}>
              <SectionList currentDraft={currentDraft} />
            </DragDropContext>
            <button type='submit'>Submit</button>
          </InputForm>
        </FormProvider>
      </AppSection>
    </>
    
  )
}

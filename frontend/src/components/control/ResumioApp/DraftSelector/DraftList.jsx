import React, {useState} from 'react'
import CreateDraftModal from './CreateDraftModal'
import { 
  DraftsContainer, 
  DraftTab,
  NewDraftBttn 
  } from '../../../style/ResumioApp/DraftListStyles'


export default function DraftList({drafts, setDrafts, setCurrentDraft}) {
  const [isOpen, setIsOpen] = useState(false)

  if (isOpen){
    return <CreateDraftModal 
      isOpen={isOpen} 
      setIsOpen={setIsOpen}
      drafts={drafts}
      setDrafts={setDrafts}
      setCurrentDraft={setCurrentDraft}
    />
  }

  return (
    <>
      <DraftsContainer>
      {drafts.map((draft) => {
        return(
          <DraftTab onClick={()=>setCurrentDraft(draft)} key={draft._id} draft={draft}>
            {draft.title}
          </DraftTab>
        )
      })}
      </DraftsContainer>
      <NewDraftBttn onClick={() => setIsOpen(true)}>+ New Draft</NewDraftBttn>
    </>
    
  )
}

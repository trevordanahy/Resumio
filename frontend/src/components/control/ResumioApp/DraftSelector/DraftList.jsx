import React from 'react'
import { DraftsContainer, DraftTab } from '../../../style/ResumioApp/DraftListStyles'


export default function DraftList({drafts, setCurrentDraft}) {
  return (
    <DraftsContainer>
      {drafts.map((draft) => {
        return(
          <DraftTab onClick={()=>setCurrentDraft(draft)} key={draft._id} draft={draft}>
            {draft.title}
          </DraftTab>
        )
      })}
    </DraftsContainer>
  )
}

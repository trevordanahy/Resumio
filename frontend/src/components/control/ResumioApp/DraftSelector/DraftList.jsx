import React, { useState } from 'react'
import { DraftsContainer, DraftTab } from '../../../style/ResumioApp/DraftListStyles'
import LoadingPanel from '../../LoadingPanel'

export default function DraftList({setCurrentDraft}) {
  const getDraftsUrl = '/app/drafts'
  const [loading, setLoading] = useState(true)
  const [drafts, setDrafts] = useState([])

  const getDraftsSuccess = (newList) => {
    setDrafts(newList)
    setLoading(false)
  }

  const getDraftsError = (error) => {
    console.log('error')
    console.log(error)
    setLoading(false)
  } 

  if(loading){
    return (
      <LoadingPanel
        method={'get'}
        requestUrl={getDraftsUrl}
        requestBody={{}} 
        successCallback={getDraftsSuccess}
        errorCallback={getDraftsError}
      />
    )
  }

  return (
    <DraftsContainer>
      {drafts.map((draft) => {
        return(
          <DraftTab key={draft._id} draft={draft}>
            {draft.title}
          </DraftTab>
          
        )
      })}
    </DraftsContainer>
  )
}

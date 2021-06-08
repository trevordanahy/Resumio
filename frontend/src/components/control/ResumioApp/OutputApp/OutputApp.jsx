import React, { useState } from 'react'
import { AppSection } from '../../../style/ResumioApp/ResumioAppStyles'
import DraftList from '../DraftSelector/DraftList'

export default function OutputApp() {
  const [currentDraft, setCurrentDraft] = useState({})

  return (
    <>
      <DraftList setCurrentDraft={setCurrentDraft} />
      <AppSection>
        Output App
      </AppSection>
    </>
  )
}

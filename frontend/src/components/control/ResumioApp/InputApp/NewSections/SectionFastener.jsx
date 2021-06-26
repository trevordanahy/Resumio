import React from 'react'
import {addSection} from './new_sections'

function SectionFastener({currentDraft, setCurrentDraft}) {
  console.log(currentDraft)
  function appendSection (sectionName){
    const updatedDraft = [...currentDraft.resume, addSection(sectionName)]
    setCurrentDraft({...currentDraft, resume: updatedDraft})
  }
  
  return (
    <div>
      <button onClick={() => appendSection('basics')}>+ Basics</button>
      <button onClick={() => appendSection('work')}>+ Work</button>
      <button onClick={() => appendSection('volunteer')}>+ Volunteer</button>
      <button onClick={() => appendSection('education')}>+ Education</button>
      <button onClick={() => appendSection('awards')}>+ Awards</button>
      <button onClick={() => appendSection('publications')}>+ Publications</button>
      <button onClick={() => appendSection('skills')}>+ Skills</button>
      <button onClick={() => appendSection('languages')}>+ Languages</button>
      <button onClick={() => appendSection('references')}>+ References</button>
      <button onClick={() => appendSection('projects')}>+ Projects</button>
    </div>
  )
}

export default SectionFastener

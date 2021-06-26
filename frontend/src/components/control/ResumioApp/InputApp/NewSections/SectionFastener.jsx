import React, {useState} from 'react'
import {addSection} from './new_sections'

function SectionFastener({currentDraft, setCurrentDraft}) {
  const [error, setError] = useState('')

  function duplicateCheck(sectionName){
    /*reason for Object.keys(section)[0] resume is array of obj, 
    each object has 1 key with section name*/
    const currentSections = currentDraft.resume.map((section) => {
      return Object.keys(section)[0]
    })
    if (currentSections.includes(sectionName)){
      return true
    }
    return false
  }


  function appendSection (sectionName){
    const isDuplicate = duplicateCheck(sectionName)
    if(isDuplicate){
      setError('You cannot add a duplicate section. This section already exists')
      return
    }
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
      <div>{error}</div>
    </div>
  )
}

export default SectionFastener

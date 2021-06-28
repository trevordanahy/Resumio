import React from 'react'
import RepeatableSection from './RepeatableSection'
import BasicsI from './BasicsI'
import { blankSections } from '../NewSections/new_sections'
import {SectionContent} from '../../../../style/ResumioApp/InputApp/SectionStyles'

function SectionController({sectionType, sectionData, setSectionData, resumeIndex, showSection}) {
  const registrationStr = `resume.${resumeIndex}.${sectionType}.`
  //all the sections have repeatable instances except basics
  const isRepeatable = (sectionType !== 'basics')

  function addInstance(e){
    e.preventDefault()
    const newSubSection = blankSections[sectionType][sectionType][0]
    const newSectionArray = [...sectionData, newSubSection]
    setSectionData(newSectionArray) 
  }
  
  if (isRepeatable){
    return(
      <SectionContent showSection={showSection}>
        <button onClick={addInstance}>Add Instance</button>
        <RepeatableSection 
          subSectionType={sectionType} 
          sectionData={sectionData} 
          resumeIndex={resumeIndex}
          registrationStr={registrationStr}
        />
      </SectionContent>
    )
  }

  return (
    <SectionContent showSection={showSection}>
      <BasicsI 
        registrationStr={registrationStr} 
        sectionData={sectionData} 
      />
    </SectionContent>
    
  )
}

export default SectionController

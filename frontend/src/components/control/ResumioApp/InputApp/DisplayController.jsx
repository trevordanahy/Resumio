import React from 'react'
import SectionSwitch from './SectionSwitch'
import {SectionContent} from '../../../style/ResumioApp/InputApp/SectionStyles'

function DisplayController({sectionType, sectionData, resumeIndex, showSection}) {

  return (
    <SectionContent showSection={showSection}>
      <SectionSwitch
        sectionType={sectionType} 
        sectionData={sectionData} 
        resumeIndex={resumeIndex} 
      />
    </SectionContent>
    
  )
}

export default DisplayController

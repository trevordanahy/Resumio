import React from 'react'
import {SectionContainer, 
        SectionTitle} from '../../../style/ResumioApp/InputApp/SectionStyles'
import SectionSwitch from './SectionSwitch'

function ResumioSection({section, resumeIndex}) {
  const sectionType = Object.keys(section)[0]
  const sectionData = section[sectionType]

  const capitalize = (word) => {
    const lower = word.toLowerCase()
    return word.charAt(0).toUpperCase() + lower.slice(1)
  }

  return (
    <SectionContainer>
      <SectionTitle>{capitalize(sectionType)}</SectionTitle>
      <SectionSwitch 
        sectionType={sectionType} 
        sectionData={sectionData} 
        resumeIndex={resumeIndex} 
      />
    </SectionContainer>
  )
}

export default ResumioSection

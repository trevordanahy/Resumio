import React from 'react'
import SectionSwitch from './SectionSwitch'
import { blankSections } from './NewSections/new_sections'
import {SectionContent} from '../../../style/ResumioApp/InputApp/SectionStyles'

function SectionController({sectionType, sectionData, setSectionData, resumeIndex, showSection}) {
  //all the sections have repeatable instances except basics
  const isRepeatable = (sectionType !== 'basics')

  function addInstance(type){
    const newSectionArray = [...sectionData, blankSections[type][type][0]]
    setSectionData(newSectionArray) 
  }
    

  return (
    <SectionContent showSection={showSection}>
      {isRepeatable ? 
        <button onClick={()=> addInstance(sectionType)}>Add Instance</button> 
        : null}
      <SectionSwitch
        sectionType={sectionType} 
        sectionData={sectionData} 
        resumeIndex={resumeIndex} 
      />
    </SectionContent>
    
  )
}

export default SectionController

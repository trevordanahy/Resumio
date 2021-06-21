import React from 'react'
import {SectionContainer, 
        SectionTitle} from '../../../style/ResumioApp/InputApp/SectionStyles'
import SectionSwitch from './SectionSwitch'
import { Draggable } from "react-beautiful-dnd"

function ResumioSection({sectionType, section, resumeIndex}) {
  const sectionData = section[sectionType]

  const capitalize = (word) => {
    const lower = word.toLowerCase()
    return word.charAt(0).toUpperCase() + lower.slice(1)
  }

  return (
    <Draggable draggableId={sectionType} index={resumeIndex}>
      {(provided, snapshot) => (
        <SectionContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
            <SectionTitle>{capitalize(sectionType)}</SectionTitle>
            <SectionSwitch 
              sectionType={sectionType} 
              sectionData={sectionData} 
              resumeIndex={resumeIndex} 
            />
        </SectionContainer>
      )}
    </Draggable>
    
  )
}

export default ResumioSection

import React from 'react'
import {StyledSectionList} from '../../../style/ResumioApp/InputApp/SectionStyles'
import {Droppable} from 'react-beautiful-dnd'
import ResumioSection from './ResumioSection'

function SectionList({currentDraft}) {
  console.log(currentDraft)
  return (
    <Droppable droppableId='inputForm'>
      {(provided, snapshot) => (
        <StyledSectionList 
          ref={provided.innerRef} 
          {...provided.droppableProps}
          style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
        >
            {currentDraft.resume.map((section, index) => {
              const sectionType = Object.keys(section)[0]
              return (
                <ResumioSection 
                  key={sectionType}
                  sectionType={sectionType} 
                  section={section} 
                  resumeIndex={index} 
                />
              )
            })}
            {provided.placeholder}
        </StyledSectionList>
      )}
    </Droppable>
  )
}

export default SectionList

import React from 'react'
import {StyledList} from '../../../style/ResumioApp/InputApp/SectionStyles'
import {Droppable} from 'react-beautiful-dnd'
import ResumioSection from './ResumioSection'

function SectionList({currentDraft}) {
  return (
    <Droppable droppableId='inputForm'>
      {(provided, snapshot) => (
        <StyledList 
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
        </StyledList>
      )}
    </Droppable>
  )
}

export default SectionList

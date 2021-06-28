import React, {useState} from 'react'
import SectionController from './SectionController'
import { Draggable } from "react-beautiful-dnd"
import {
  SectionContainer,
  DragHandle,
  Title,
  ContentContainer,
  Chevron,
  TitleBar
  } from '../../../../style/ResumioApp/InputApp/SectionStyles'

function SectionFixture({sectionType, section, resumeIndex}) {
  const [sectionData, setSectionData] = useState(section[sectionType])
  const [showSection, setShowSection] = useState(false)

  const capitalize = (word) => {
    const lower = word.toLowerCase()
    return word.charAt(0).toUpperCase() + lower.slice(1)
  }

  function displaySectionToggle(){
    setShowSection(!showSection)
  }


  return (
    <Draggable draggableId={sectionType} index={resumeIndex}>
      {(provided, snapshot) => (
        <SectionContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <DragHandle {...provided.dragHandleProps}>|||</DragHandle>
          <ContentContainer>
            <TitleBar onClick={displaySectionToggle}>
              <Title>{capitalize(sectionType)}</Title>
              <Chevron>=</Chevron>
            </TitleBar>
            <SectionController 
              sectionType={sectionType} 
              sectionData={sectionData}
              setSectionData={setSectionData} 
              resumeIndex={resumeIndex}
              showSection={showSection} 
            />
          </ContentContainer>
        </SectionContainer>
      )}
    </Draggable>
  )
}

export default SectionFixture

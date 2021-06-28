import React from 'react'
import {v4 as v4uuid} from 'uuid'
import { SectionFieldset } from '../../../../style/ResumioApp/InputApp/SectionStyles'
import SubSectionProvider from './SubSections/SubSectionProvider'

function RepeatableSection({subSectionType, sectionData, registrationStr}) {
  return (
    <>
    {sectionData.map((subSectionObj, index) => {
      return(
        <SectionFieldset key={v4uuid()}>
          <SubSectionProvider 
            subSectionType={subSectionType}
            registrationStr={registrationStr}
            subSectionObj={subSectionObj}
            index={index}  
          />
        </SectionFieldset>
      )
    })}
    </>
  )
}

export default RepeatableSection

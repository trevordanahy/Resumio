import React from 'react'
import { useFormContext } from 'react-hook-form'
import LocationI from '../NestedSegments/LocationI'
import RepeatableItems from '../NestedSegments/RepeatableField'
import {ResumioLabel, 
        ResumioInput,
        ResumioTextArea, 
        SectionLegend
        } from '../../../../../style/ResumioApp/InputApp/SectionStyles'

function WorkI({subSectionObj, index, registrationStr}) {
  const {register} = useFormContext()
  
  return (
    <>
      <SectionLegend>{subSectionObj.name}</SectionLegend>
      <ResumioLabel htmlFor="name">Company Name</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr + `${index}.name`)} 
        name="name" 
        defaultValue={subSectionObj["name"]}
      />
      <LocationI 
        location={subSectionObj.location} 
        parentIndex={index} 
        registrationStr={registrationStr}
      />
      <ResumioLabel htmlFor="position">Position</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr + `${index}.position`)} 
        name="position" 
        defaultValue={subSectionObj["position"]} 
      />
      <ResumioLabel htmlFor="startDate">Start Date</ResumioLabel>
      <ResumioInput 
        type='date'
        {...register(registrationStr + `${index}.startDate`)} 
        name="startDate" 
        defaultValue={subSectionObj["startDate"]} 
      />
      <ResumioLabel htmlFor="endDate">End Date</ResumioLabel>
      <ResumioInput 
        type='date'
        {...register(registrationStr + `${index}.endDate`)} 
        name="endDate" 
        defaultValue={subSectionObj["endDate"]} 
      />
      <ResumioLabel htmlFor="summary">Job Description</ResumioLabel>
      <ResumioTextArea 
        rows='3'
        {...register(registrationStr + `${index}.summary`)} 
        name="summary" 
        defaultValue={subSectionObj["summary"]} 
      />
      <RepeatableItems 
        repeatable={subSectionObj['highlights']}
        title={'highlights'} 
        parentIndex={index}
        registrationStr={registrationStr}
      />
    </>
  )
}

export default WorkI

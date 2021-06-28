import React from 'react'
import { useFormContext } from 'react-hook-form'
import RepeatableItems from '../NestedSegments/RepeatableField'
import {ResumioLabel, 
        ResumioInput,
        ResumioTextArea,
        SubSectionTitle,
        } from '../../../../../style/ResumioApp/InputApp/SectionStyles'

function VolunteerI({subSectionObj, index, registrationStr}) {
  const {register} = useFormContext()

  return (
    <>
      <SubSectionTitle>{subSectionObj.organization}</SubSectionTitle>
      <ResumioLabel htmlFor="organization">Organization</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr + `${index}.organization`)} 
        name="organization" 
        defaultValue={subSectionObj["organization"]}
      />
      <ResumioLabel htmlFor="url">Org Website</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr + `${index}.url`)} 
        name="url" 
        defaultValue={subSectionObj["url"]} 
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

export default VolunteerI

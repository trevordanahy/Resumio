import React from 'react'
import { useFormContext } from 'react-hook-form'
import RepeatableItems from '../NestedSegments/RepeatableField'
import {ResumioLabel, 
        ResumioInput,
        SubSectionTitle,
        } from '../../../../../style/ResumioApp/InputApp/SectionStyles'

function EducationI({subSectionObj, index, registrationStr}) {
  const {register} = useFormContext()

  return (
    <>
      <SubSectionTitle>{subSectionObj.institution}</SubSectionTitle>
      <ResumioLabel htmlFor="institution">Institution</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr + `${index}.institution`, {shouldUnregister: true})} 
        name="institution" 
        defaultValue={subSectionObj["institution"]} 
      />
      <ResumioLabel htmlFor="url">Institution URL</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr + `${index}.url`, {shouldUnregister: true})} 
        name="url" 
        defaultValue={subSectionObj["url"]} 
      />
      <ResumioLabel htmlFor="area">Area of Study</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr + `${index}.area`, {shouldUnregister: true})} 
        name="area" 
        defaultValue={subSectionObj["area"]} 
      />
      <ResumioLabel htmlFor="institution">Institution</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr + `${index}.institution`, {shouldUnregister: true})} 
        name="institution" 
        defaultValue={subSectionObj["institution"]} 
      />
      <ResumioLabel htmlFor="studyType">Degree or Program</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr + `${index}.studyType`, {shouldUnregister: true})} 
        name="studyType" 
        defaultValue={subSectionObj["studyType"]} 
      />
      <ResumioLabel htmlFor="startDate">Start Date</ResumioLabel>
      <ResumioInput 
        type='date'
        {...register(registrationStr + `${index}.startDate`, {shouldUnregister: true}) } 
        name="startDate" 
        defaultValue={subSectionObj["startDate"]} 
      />
      <ResumioLabel htmlFor="endDate">End Date</ResumioLabel>
      <ResumioInput 
        type='date'
        {...register(registrationStr + `${index}.endDate`, {shouldUnregister: true})} 
        name="endDate" 
        defaultValue={subSectionObj["endDate"]} 
      />
      <RepeatableItems
        repeatable={subSectionObj['courses']}
        title={'courses'}  
        parentIndex={index}
        registrationStr={registrationStr}
      />
    </>
  )  
}

export default EducationI

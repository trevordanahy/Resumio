import React from 'react'
import { useFormContext } from 'react-hook-form'
import RepeatableItems from '../NestedSegments/RepeatableField'
import {ResumioLabel, 
        ResumioInput,
        SectionLegend,
        } from '../../../../../style/ResumioApp/InputApp/SectionStyles'

function ProjectsI({subSectionObj, index, registrationStr}) {
  const {register} = useFormContext()

  return (
    <>
      <SectionLegend>{subSectionObj.name}</SectionLegend>
      <ResumioLabel htmlFor="name">Project Name</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr + `${index}.name`)} 
        name="name" 
        defaultValue={subSectionObj["name"]} 
      />
      <ResumioLabel htmlFor="projectType">Project Type</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr + `${index}.projectType`)} 
        name="projectType" 
        defaultValue={subSectionObj["projectType"]} 
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
      <ResumioLabel htmlFor="description">Description</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr + `${index}.description`)} 
        name="description" 
        defaultValue={subSectionObj["description"]} 
      />
      <RepeatableItems 
      repeatable={subSectionObj['roles']}
      title={'roles'} 
      parentIndex={index}
      registrationStr={registrationStr}
      />
      <RepeatableItems 
      repeatable={subSectionObj['keywords']}
      title={'keywords'} 
      parentIndex={index}
      registrationStr={registrationStr}
      />
      <RepeatableItems 
      repeatable={subSectionObj['highlights']}
      title={'highlights'} 
      parentIndex={index}
      registrationStr={registrationStr}
      />
      <ResumioLabel htmlFor="url">Project URL</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr + `${index}.url`)} 
        name="url" 
        defaultValue={subSectionObj["url"]} 
      />
    </>
  )
}

export default ProjectsI

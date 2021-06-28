import React from 'react'
import { useFormContext } from 'react-hook-form'
import {ResumioLabel, 
        ResumioInput,
        ResumioTextArea, 
        SectionLegend,
        } from '../../../../../style/ResumioApp/InputApp/SectionStyles'

function PublicationsI({subSectionObj, index,registrationStr}) {
  const {register} = useFormContext()
  return (
    <>
      <SectionLegend>{subSectionObj.name}</SectionLegend>
      <ResumioLabel htmlFor="name">Publication Title</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr +`${index}.name`, {shouldUnregister: true})} 
        name="name" 
        defaultValue={subSectionObj["name"]}
      />
      <ResumioLabel htmlFor="name">Publisher</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr +`${index}.publisher`, {shouldUnregister: true})} 
        name="publisher" 
        defaultValue={subSectionObj["publisher"]}
      />
      <ResumioLabel htmlFor="releaseDate">Publication Date</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr +`${index}.releaseDate`, {shouldUnregister: true})}
        type='date' 
        name="releaseDate" 
        defaultValue={subSectionObj["releaseDate"]}
      />
      <ResumioLabel htmlFor="summary">Synopsis</ResumioLabel>
      <ResumioTextArea 
      rows='4'
      {...register(registrationStr +`${index}.summary`, {shouldUnregister: true})} 
      name="summary" 
      defaultValue={subSectionObj["summary"]} 
      />
      <ResumioLabel htmlFor="url">URL</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr +`${index}.url`, {shouldUnregister: true})}
        name="url" 
        defaultValue={subSectionObj["url"]}
      />
    </>
  )
}

export default PublicationsI

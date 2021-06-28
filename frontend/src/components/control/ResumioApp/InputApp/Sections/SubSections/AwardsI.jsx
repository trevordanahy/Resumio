import React from 'react'
import { useFormContext } from 'react-hook-form'
import {ResumioLabel, 
        ResumioInput,
        ResumioTextArea,
        SectionLegend,
        } from '../../../../../style/ResumioApp/InputApp/SectionStyles'

function AwardsI({subSectionObj, index, registrationStr}) {
  const {register} = useFormContext()

  return (
    <>
      <SectionLegend>{subSectionObj.title}</SectionLegend>
      <ResumioLabel htmlFor="awarder">Awarder</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr + `${index}.awarder`)} 
        name="awarder" 
        defaultValue={subSectionObj["awarder"]} 
      />
      <ResumioLabel htmlFor="title">Award Title</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr + `${index}.title`)} 
        name="title" 
        defaultValue={subSectionObj["title"]} 
      />
      <ResumioLabel htmlFor="date">Award Date</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr +`${index}.date`)} 
        type='date'
        name="title" 
        defaultValue={subSectionObj["date"]} 
      />
      <ResumioLabel htmlFor="summary">Award Description</ResumioLabel>
      <ResumioTextArea 
      rows='3'
      {...register(registrationStr + `${index}.summary`)} 
      name="summary" 
      defaultValue={subSectionObj["summary"]} 
      />     
    </>
  )
}

export default AwardsI

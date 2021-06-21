import React from 'react'
import { useFormContext } from 'react-hook-form'
import {ResumioLabel, 
        ResumioInput,
        ResumioTextArea,
        SectionLegend,
        SectionFieldset,
        } from '../../../../style/ResumioApp/InputApp/SectionStyles'

function AwardsI({sectionData, registrationStr}) {
  const {register} = useFormContext()

  return (
    <>
      {sectionData.map((award, index) => {
        return(
          <SectionFieldset key={`${award.title}_${award.date}`}>
            <SectionLegend>{award.title}</SectionLegend>
            <ResumioLabel htmlFor="awarder">Awarder</ResumioLabel>
            <ResumioInput 
              {...register(registrationStr + `${index}.awarder`)} 
              name="awarder" 
              defaultValue={award["awarder"]} 
            />
            <ResumioLabel htmlFor="title">Award Title</ResumioLabel>
            <ResumioInput 
              {...register(registrationStr + `${index}.title`)} 
              name="title" 
              defaultValue={award["title"]} 
            />
            <ResumioLabel htmlFor="date">Award Date</ResumioLabel>
            <ResumioInput 
              {...register(registrationStr +`${index}.date`)} 
              type='date'
              name="title" 
              defaultValue={award["date"]} 
            />
            <ResumioLabel htmlFor="summary">Award Description</ResumioLabel>
            <ResumioTextArea 
            rows='3'
            {...register(registrationStr + `${index}.summary`)} 
            name="summary" 
            defaultValue={award["summary"]} 
            />
          </SectionFieldset>
        )
      })}
    </>
  )
}

export default AwardsI

import React from 'react'
import { useFormContext } from 'react-hook-form'
import {
        SectionFieldset,
        ResumioTextArea,
        SubSectionTitle
        } from '../../../../style/ResumioApp/InputApp/SectionStyles'

function RepeatableItems({repeatable, title, parent, parentIndex, resumeIndex}) {
  const {register} = useFormContext()

  return (
    <SectionFieldset>
      <SubSectionTitle>{title}</SubSectionTitle>
      {repeatable.map((item, index) => {
        return (
          <ResumioTextArea key={`${title}_${index}`}
            rows='2'
            {...register(`resume.${resumeIndex}.${parent}.${parentIndex}.${title}.${index}`)} 
            name={`${parent}.${title}.${index}`} 
            defaultValue={item} 
          />
        )
      })}
    </SectionFieldset>
  )
}

export default RepeatableItems
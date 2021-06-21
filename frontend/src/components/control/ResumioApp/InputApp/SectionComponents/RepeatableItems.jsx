import React from 'react'
import { useFormContext } from 'react-hook-form'
import {
        SectionFieldset,
        ResumioTextArea,
        SubSectionTitle
        } from '../../../../style/ResumioApp/InputApp/SectionStyles'

function RepeatableItems({repeatable, title, parentIndex, registrationStr}) {
  const {register} = useFormContext()

  return (
    <SectionFieldset>
      <SubSectionTitle>{title}</SubSectionTitle>
      {repeatable.map((item, index) => {
        return (
          <ResumioTextArea key={`${title}_${index}`}
            rows='2'
            {...register(registrationStr +`${parentIndex}.${title}.${index}`)} 
            name={`${title}.${index}`} 
            defaultValue={item} 
          />
        )
      })}
    </SectionFieldset>
  )
}

export default RepeatableItems

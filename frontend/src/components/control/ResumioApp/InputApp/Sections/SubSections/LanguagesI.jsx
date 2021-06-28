import React from 'react'
import { useFormContext } from 'react-hook-form'
import {ResumioLabel, 
        ResumioInput,
        } from '../../../../../style/ResumioApp/InputApp/SectionStyles'

function LanguagesI({subSectionObj, index, registrationStr}) {
  const {register} = useFormContext()
  return (
    <>
      <ResumioLabel htmlFor="language">Language</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr + `${index}.language`, {shouldUnregister: true})} 
        name="language" 
        defaultValue={subSectionObj["language"]} 
      />
      <ResumioLabel htmlFor="fluency">Fluency</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr + `${index}.fluency`, {shouldUnregister: true})} 
        name="fluency" 
        defaultValue={subSectionObj["fluency"]} 
      />
    </>
  )
}

export default LanguagesI

import React from 'react'
import ContactI from '../NestedSegments/ContactI'
import {
  ResumioInput, 
  ResumioLabel, 
  ResumioTextArea } from '../../../../../style/ResumioApp/InputApp/SectionStyles'
import { useFormContext } from 'react-hook-form'

function ReferencesI({subSectionObj, index, registrationStr}) {
  const {register} = useFormContext()
  
  return (
    <>
      <ContactI 
        contact={subSectionObj.contact} 
        parentIndex={index} 
        registrationStr={registrationStr}
      />
      <ResumioLabel htmlFor="relationship">Relationship</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr + `${index}.relationship`, {shouldUnregister: true})} 
        name="relationship" 
        defaultValue={subSectionObj["relationship"]} 
      />
      <ResumioLabel htmlFor="reference">Reference</ResumioLabel>
      <ResumioTextArea 
        {...register(registrationStr + `${index}.reference`, {shouldUnregister: true})}
        rows='3' 
        name="reference" 
        defaultValue={subSectionObj["reference"]}
      />
    </>
  )
}

export default ReferencesI

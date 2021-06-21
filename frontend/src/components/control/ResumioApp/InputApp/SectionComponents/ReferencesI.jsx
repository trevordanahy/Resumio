import React from 'react'
import ContactI from './ContactI'
import { 
  SectionFieldset,
  ResumioInput, 
  ResumioLabel, 
  ResumioTextArea } from '../../../../style/ResumioApp/InputApp/SectionStyles'
import { useFormContext } from 'react-hook-form'

function ReferencesI({sectionData, registrationStr}) {
  const {register} = useFormContext()
  
  return (
    <>
      {sectionData.map((reference, index) => {
        return(
          <SectionFieldset key={`${reference.contact.firstName}_${reference.contact.lastName}`}>
            <ContactI 
              contact={reference.contact} 
              parentIndex={index} 
              registrationStr={registrationStr}
            />
            <ResumioLabel htmlFor="relationship">Relationship</ResumioLabel>
            <ResumioInput 
              {...register(registrationStr + `${index}.relationship`)} 
              name="relationship" 
              defaultValue={reference["relationship"]} 
            />
            <ResumioLabel htmlFor="reference">Reference</ResumioLabel>
            <ResumioTextArea 
              {...register(registrationStr + `${index}.reference`)}
              rows='3' 
              name="reference" 
              defaultValue={reference["reference"]}
            />
          </SectionFieldset>
        )
      })}
    </>
  )
}

export default ReferencesI

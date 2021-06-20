import React from 'react'
import ContactI from './ContactI'
import { 
  SectionFieldset,
  ResumioInput, 
  ResumioLabel, 
  ResumioTextArea } from '../../../../style/ResumioApp/InputApp/SectionStyles'
import { useFormContext } from 'react-hook-form'

function ReferencesI({sectionData, sectionType, resumeIndex}) {
  const {register} = useFormContext()
  const regString = `resume.${resumeIndex}.${sectionType}.`
  
  return (
    <>
      {sectionData.map((reference, index) => {
        return(
          <SectionFieldset key={`${reference.contact.firstName}_${reference.contact.lastName}`}>
            <ContactI 
              contact={reference.contact} 
              parent={sectionType}
              parentIndex={index} 
              resumeIndex={resumeIndex}
            />
            <ResumioLabel htmlFor="relationship">Relationship</ResumioLabel>
            <ResumioInput 
              {...register(regString +`${index}.relationship`)} 
              name="relationship" 
              defaultValue={reference["relationship"]} 
            />
            <ResumioLabel htmlFor="reference">Reference</ResumioLabel>
            <ResumioTextArea 
              {...register(regString + `${index}.reference`)}
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

import React from 'react'
import ContactI from './ContactI'
import LocationI from './LocationI'
import { ResumioInput, 
  ResumioLabel, 
  ResumioTextArea } from '../../../../style/ResumioApp/InputApp/SectionStyles'
import { useFormContext } from 'react-hook-form'

function BasicsI({sectionData, sectionType, resumeIndex}) {
  const {register} = useFormContext()
  const contact = sectionData["contact"]
  const location = sectionData["location"]

  return (
    <>
      <ContactI 
        contact={contact} 
        parent={sectionType} 
        resumeIndex={resumeIndex}
      />
      <LocationI 
        location={location} 
        parent={sectionType}
        resumeIndex={resumeIndex}
      />
      <ResumioLabel htmlFor="jobTitle">Job Title</ResumioLabel>
      <ResumioInput 
        {...register(`resume.${resumeIndex}.${sectionType}.jobTitle`)} 
        name="jobTitle"  
        defaultValue={sectionData["jobTitle"]}
      />
      <ResumioLabel htmlFor="summary">About</ResumioLabel>
      <ResumioTextArea 
        {...register(`resume.${resumeIndex}.${sectionType}.summary`)}
        rows='5' 
        name="summary" 
        defaultValue={sectionData["summary"]}
      />
      <ResumioLabel htmlFor="url">Personal Website</ResumioLabel>
      <ResumioInput 
        {...register(`resume.${resumeIndex}.${sectionType}.url`)} 
        name="url" 
        defaultValue={sectionData["url"]}
      />
      <ResumioLabel htmlFor="img">Personal Image</ResumioLabel>
      <ResumioInput 
        {...register(`resume.${resumeIndex}.${sectionType}.img`)} 
        name="img" defaultValue={sectionData["img"]}
      />
    </>
  )
}

export default BasicsI

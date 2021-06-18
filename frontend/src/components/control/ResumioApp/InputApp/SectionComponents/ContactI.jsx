import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ResumioLabel, 
  ResumioInput,
  SectionFieldset, 
  SectionLegend} from '../../../../style/ResumioApp/InputApp/SectionStyles'

function ContactI({contact, parent, resumeIndex}) {
  const {register} = useFormContext()

  return (
    <SectionFieldset>
      <SectionLegend>Contact</SectionLegend>
      <ResumioLabel htmlFor="firstName">First Name</ResumioLabel>
      <ResumioInput 
        {...register(`resume.${resumeIndex}.${parent}.contact.firstName`)} 
        name="firstName" 
        defaultValue={contact["firstName"]}
      />
      <ResumioLabel htmlFor="lastName">Last Name</ResumioLabel>
      <ResumioInput 
        {...register(`resume.${resumeIndex}.${parent}.contact.lastName`)} 
        name="lastName" 
        defaultValue={contact["lastName"]}
      />
      <ResumioLabel htmlFor="phone">Phone</ResumioLabel>
      <ResumioInput 
        {...register(`resume.${resumeIndex}.${parent}.contact.phone`)} 
        name="phone" 
        defaultValue={contact["phone"]}
      />
      <ResumioLabel htmlFor="email">Email</ResumioLabel>
      <ResumioInput 
        {...register(`resume.${resumeIndex}.${parent}.contact.email`)} 
        name="email" 
        defaultValue={contact["email"]}
      />
    </SectionFieldset>
  )
}
export default ContactI

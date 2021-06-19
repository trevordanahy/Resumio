import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ResumioLabel, 
  ResumioInput,
  SectionFieldset, 
  SectionLegend} from '../../../../style/ResumioApp/InputApp/SectionStyles'

function ContactI({contact, parent, parentIndex, resumeIndex}) {
  const {register} = useFormContext()

  function makeRegistrationString (parentIndex){
    if (parentIndex || parentIndex === 0){
      return `resume.${resumeIndex}.${parent}.${parentIndex}.contact`
    } else {
      return `resume.${resumeIndex}.${parent}.contact`
    }
  }

  const regString = makeRegistrationString(parentIndex)

  return (
    <SectionFieldset>
      <SectionLegend>Contact</SectionLegend>
      <ResumioLabel htmlFor="firstName">First Name</ResumioLabel>
      <ResumioInput 
        {...register(regString + '.firstName')} 
        name="firstName" 
        defaultValue={contact["firstName"]}
      />
      <ResumioLabel htmlFor="lastName">Last Name</ResumioLabel>
      <ResumioInput 
        {...register(regString + '.lastName')} 
        name="lastName" 
        defaultValue={contact["lastName"]}
      />
      <ResumioLabel htmlFor="phone">Phone</ResumioLabel>
      <ResumioInput 
        {...register(regString + '.phone')} 
        name="phone" 
        defaultValue={contact["phone"]}
      />
      <ResumioLabel htmlFor="email">Email</ResumioLabel>
      <ResumioInput 
        {...register(regString + '.email')} 
        name="email" 
        defaultValue={contact["email"]}
      />
    </SectionFieldset>
  )
}
export default ContactI

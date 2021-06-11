import React from 'react'
import { ResumioLabel, 
  ResumioInput,
  SectionFieldset, 
  SectionLegend} from '../../../../style/ResumioApp/InputApp/SectionStyles'

function ContactI({contact}) {
  return (
    <SectionFieldset>
      <SectionLegend>Contact</SectionLegend>
      <ResumioLabel htmlFor="firstName">First Name</ResumioLabel>
      <ResumioInput id="firstName" name="firstName" defaultValue={contact["firstName"]}/>
      <ResumioLabel htmlFor="lastName">Last Name</ResumioLabel>
      <ResumioInput id="lastName" name="lastName" defaultValue={contact["lastName"]}/>
      <ResumioLabel htmlFor="phone">Phone</ResumioLabel>
      <ResumioInput id="phone" name="phone" defaultValue={contact["phone"]}/>
      <ResumioLabel htmlFor="email">Email</ResumioLabel>
      <ResumioInput id="email" name="email" defaultValue={contact["email"]}/>
    </SectionFieldset>
  )
}
export default ContactI

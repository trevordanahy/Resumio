import React from 'react'
import ContactI from './ContactI'
import LocationI from './LocationI'
import { ResumioInput, 
  ResumioLabel, 
  ResumioTextArea } from '../../../../style/ResumioApp/InputApp/SectionStyles'

function BasicsI({sectionData}) {
  const contact = sectionData["contact"]
  const location = sectionData["location"]

  return (

    <>
      <ContactI contact={contact} />
      <LocationI location={location} />
      <ResumioLabel htmlFor="jobTitle">Job Title</ResumioLabel>
      <ResumioInput id="jobTitle" name="jobTitle" defaultValue={contact["jobTitle"]}/>
      <ResumioLabel htmlFor="summary">About</ResumioLabel>
      <ResumioTextArea rows='5' id="summary" name="summary" defaultValue={contact["summary"]}/>
      <ResumioLabel htmlFor="url">Personal Website</ResumioLabel>
      <ResumioInput id="url" name="url" defaultValue={contact["url"]}/>
      <ResumioLabel htmlFor="img">Personal Image</ResumioLabel>
      <ResumioInput id="img" name="img" defaultValue={contact["img"]}/>
      
    </>
  )
}

export default BasicsI

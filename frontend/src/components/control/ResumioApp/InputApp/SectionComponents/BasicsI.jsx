import React from 'react'
import ContactI from './ContactI'
import LocationI from './LocationI'
import ProfilesI from './ProfilesI'
import { ResumioInput, 
  ResumioLabel, 
  ResumioTextArea } from '../../../../style/ResumioApp/InputApp/SectionStyles'
import { useFormContext } from 'react-hook-form'

function BasicsI({sectionData, registrationStr}) {
  const {register} = useFormContext()
  const contact = sectionData["contact"]
  const location = sectionData["location"]

  return (
    <>
      <ContactI 
        contact={contact} 
        registrationStr={registrationStr}
      />
      <LocationI 
        location={location} 
        registrationStr={registrationStr}
      />
      <ResumioLabel htmlFor="jobTitle">Job Title</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr + 'jobTitle')} 
        name="jobTitle"  
        defaultValue={sectionData["jobTitle"]}
      />
      <ResumioLabel htmlFor="summary">About</ResumioLabel>
      <ResumioTextArea 
        {...register(registrationStr + 'summary')}
        rows='5' 
        name="summary" 
        defaultValue={sectionData["summary"]}
      />
      <ResumioLabel htmlFor="url">Personal Website</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr + 'url')} 
        name="url" 
        defaultValue={sectionData["url"]}
      />
      <ResumioLabel htmlFor="img">Personal Image</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr + 'img')} 
        name="img" defaultValue={sectionData["img"]}
      />
      <ProfilesI 
        profiles={sectionData['profiles']} 
        registrationStr={registrationStr}
      />
    </>
  )
}

export default BasicsI

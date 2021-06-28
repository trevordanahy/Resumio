import React from 'react'
import ContactI from './NestedSegments/ContactI'
import LocationI from './NestedSegments/LocationI'
import ProfilesI from './NestedSegments/ProfilesI'
import { ResumioInput, 
  ResumioLabel, 
  ResumioTextArea,
  SectionFieldset } from '../../../../style/ResumioApp/InputApp/SectionStyles'
import { useFormContext } from 'react-hook-form'

function BasicsI({sectionData, registrationStr}) {
  const {register} = useFormContext()
  return (
    <SectionFieldset>
      <ContactI 
        contact={sectionData["contact"]} 
        registrationStr={registrationStr}
      />
      <LocationI 
        location={sectionData["location"]} 
        registrationStr={registrationStr}
      />
      <SectionFieldset>
        <ResumioLabel htmlFor="jobTitle">Job Title</ResumioLabel>
        <ResumioInput 
          {...register(registrationStr + 'jobTitle', {shouldUnregister: true})} 
          name="jobTitle"  
          defaultValue={sectionData["jobTitle"]}
        />
        <ResumioLabel htmlFor="summary">About</ResumioLabel>
        <ResumioTextArea 
          {...register(registrationStr + 'summary', {shouldUnregister: true})}
          rows='5' 
          name="summary" 
          defaultValue={sectionData["summary"]}
        />
        <ResumioLabel htmlFor="url">Personal Website</ResumioLabel>
        <ResumioInput 
          {...register(registrationStr + 'url', {shouldUnregister: true})} 
          name="url" 
          defaultValue={sectionData["url"]}
        />
        <ResumioLabel htmlFor="img">Personal Image</ResumioLabel>
        <ResumioInput 
          {...register(registrationStr + 'img', {shouldUnregister: true})} 
          name="img" defaultValue={sectionData["img"]}
        />
      </SectionFieldset>
      <ProfilesI 
        profiles={sectionData['profiles']} 
        registrationStr={registrationStr}
      />
    </SectionFieldset>
  )
}

export default BasicsI

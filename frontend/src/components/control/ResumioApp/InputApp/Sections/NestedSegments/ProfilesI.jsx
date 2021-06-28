import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ResumioLabel, 
  ResumioInput,
  SectionFieldset, 
  SectionLegend} from '../../../../../style/ResumioApp/InputApp/SectionStyles'

function ProfilesI({profiles, registrationStr}) {
  const {register} = useFormContext()

  return (
    <SectionFieldset>
      <SectionLegend>Profiles</SectionLegend>
      {profiles.map((profile, index) => {
        return (
          <SectionFieldset key={`${profile.network}_${profile.username}`}>
            <ResumioLabel htmlFor="network">Network</ResumioLabel>
            <ResumioInput 
              {...register(registrationStr + `profiles.${index}.network`, 
                          {shouldUnregister: true})} 
              name="network" 
              defaultValue={profile["network"]}
            />
            <ResumioLabel htmlFor="username">Username</ResumioLabel>
            <ResumioInput 
              {...register(registrationStr + `profiles.${index}.username`,
                          {shouldUnregister: true})} 
              name="username" 
              defaultValue={profile["username"]}
            />
            <ResumioLabel htmlFor="url">URL</ResumioLabel>
            <ResumioInput 
              {...register(registrationStr + `profiles.${index}.url`,
                          {shouldUnregister: true})} 
              name="url" 
              defaultValue={profile["url"]}
            />
         </SectionFieldset> 
        )
      })}
    </SectionFieldset>
  )
}

export default ProfilesI

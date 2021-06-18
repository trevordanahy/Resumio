import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ResumioLabel, 
  ResumioInput,
  SectionFieldset, 
  SectionLegend} from '../../../../style/ResumioApp/InputApp/SectionStyles'

function ProfilesI({profiles, parent, parentIndex, resumeIndex}) {
  const {register} = useFormContext()

  return (
    <SectionFieldset>
      <SectionLegend>Profiles</SectionLegend>
      {profiles.map((profile, index) => {
        return (
          <SectionFieldset key={`${profile.network}_${profile.username}`}>
            <ResumioLabel htmlFor="network">Network</ResumioLabel>
            <ResumioInput 
              {...register(`resume.${resumeIndex}.${parent}.profiles.${index}.network`)} 
              name="network" 
              defaultValue={profile["network"]}
            />
            <ResumioLabel htmlFor="username">Username</ResumioLabel>
            <ResumioInput 
              {...register(`resume.${resumeIndex}.${parent}.profiles.${index}.username`)} 
              name="username" 
              defaultValue={profile["username"]}
            />
            <ResumioLabel htmlFor="url">URL</ResumioLabel>
            <ResumioInput 
              {...register(`resume.${resumeIndex}.${parent}.profiles.${index}.url`)} 
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

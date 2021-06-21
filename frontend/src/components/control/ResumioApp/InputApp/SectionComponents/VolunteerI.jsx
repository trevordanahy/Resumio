import React from 'react'
import { useFormContext } from 'react-hook-form'
import RepeatableItems from './RepeatableItems'
import {ResumioLabel, 
        ResumioInput,
        ResumioTextArea,
        SubSectionTitle,
        SectionFieldset,
        } from '../../../../style/ResumioApp/InputApp/SectionStyles'

function VolunteerI({sectionData, registrationStr}) {
  const {register} = useFormContext()

  return (
    <>
     {sectionData.map((org, index) => {
       return(
        <SectionFieldset key={`${org.name}_${org.position}`}>
          <SubSectionTitle>{org.organization}</SubSectionTitle>
          <ResumioLabel htmlFor="organization">Organization</ResumioLabel>
          <ResumioInput 
            {...register(registrationStr + `${index}.organization`)} 
            name="organization" 
            defaultValue={org["organization"]}
          />
          <ResumioLabel htmlFor="url">Org Website</ResumioLabel>
          <ResumioInput 
            {...register(registrationStr + `${index}.url`)} 
            name="url" 
            defaultValue={org["url"]} 
          />
          <ResumioLabel htmlFor="position">Position</ResumioLabel>
          <ResumioInput 
            {...register(registrationStr + `${index}.position`)} 
            name="position" 
            defaultValue={org["position"]} 
          />
          <ResumioLabel htmlFor="startDate">Start Date</ResumioLabel>
          <ResumioInput 
            type='date'
            {...register(registrationStr + `${index}.startDate`)} 
            name="startDate" 
            defaultValue={org["startDate"]} 
          />
          <ResumioLabel htmlFor="endDate">End Date</ResumioLabel>
          <ResumioInput 
            type='date'
            {...register(registrationStr + `${index}.endDate`)} 
            name="endDate" 
            defaultValue={org["endDate"]} 
          />
          <ResumioLabel htmlFor="summary">Job Description</ResumioLabel>
          <ResumioTextArea 
            rows='3'
            {...register(registrationStr + `${index}.summary`)} 
            name="summary" 
            defaultValue={org["summary"]} 
          />
          <RepeatableItems 
            repeatable={org['highlights']}
            title={'highlights'} 
            parentIndex={index}
            registrationStr={registrationStr}
          />
        </SectionFieldset>

       )
     })}
    </>
  )
}

export default VolunteerI

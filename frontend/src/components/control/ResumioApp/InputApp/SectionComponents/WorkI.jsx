import React from 'react'
import { useFormContext } from 'react-hook-form'
import LocationI from './LocationI'
import RepeatableItems from './RepeatableItems'
import {ResumioLabel, 
        ResumioInput,
        ResumioTextArea, 
        SectionLegend,
        SectionFieldset} from '../../../../style/ResumioApp/InputApp/SectionStyles'

function WorkI({sectionData, registrationStr}) {
  const {register} = useFormContext()
  
  return (
  <>
    {sectionData.map((job,index) => {
      return(
        <SectionFieldset key={`${job.name}_${job.position}`}>
          <SectionLegend>{job.name}</SectionLegend>
          <ResumioLabel htmlFor="name">Company Name</ResumioLabel>
          <ResumioInput 
            {...register(registrationStr + `${index}.name`)} 
            name="name" 
            defaultValue={job["name"]}
          />
          <LocationI 
            location={job.location} 
            parentIndex={index} 
            registrationStr={registrationStr}
          />
          <ResumioLabel htmlFor="position">Position</ResumioLabel>
          <ResumioInput 
            {...register(registrationStr + `${index}.position`)} 
            name="position" 
            defaultValue={job["position"]} 
          />
          <ResumioLabel htmlFor="startDate">Start Date</ResumioLabel>
          <ResumioInput 
            type='date'
            {...register(registrationStr + `${index}.startDate`)} 
            name="startDate" 
            defaultValue={job["startDate"]} 
          />
          <ResumioLabel htmlFor="endDate">End Date</ResumioLabel>
          <ResumioInput 
            type='date'
            {...register(registrationStr + `${index}.endDate`)} 
            name="endDate" 
            defaultValue={job["endDate"]} 
          />
          <ResumioLabel htmlFor="summary">Job Description</ResumioLabel>
          <ResumioTextArea 
            rows='3'
            {...register(registrationStr + `${index}.summary`)} 
            name="summary" 
            defaultValue={job["summary"]} 
          />
          <RepeatableItems 
            repeatable={job['highlights']}
            title={'highlights'} 
            parentIndex={index}
            registrationStr={registrationStr}
          />
        </SectionFieldset>
    )
    })}
  </>)
  
}

export default WorkI

import React from 'react'
import { useFormContext } from 'react-hook-form'
import RepeatableItems from './RepeatableItems'
import {ResumioLabel, 
        ResumioInput,
        ResumioTextArea, 
        SectionLegend,
        SectionFieldset} from '../../../../style/ResumioApp/InputApp/SectionStyles'

function WorkI({sectionData, sectionType, resumeIndex}) {
  const {register} = useFormContext()
  return (
  <>
    {sectionData.map((job,index) => {
      return(
        <SectionFieldset key={`${job.name}_${job.position}`}>
          <SectionLegend>{job.name}</SectionLegend>
          <ResumioLabel htmlFor="name">Company Name</ResumioLabel>
          <ResumioInput 
            {...register(`resume.${resumeIndex}.work.${index}.name`)} 
            name="name" 
            defaultValue={job["name"]}
          />
          <ResumioLabel htmlFor="position">Position</ResumioLabel>
          <ResumioInput 
            {...register(`resume.${resumeIndex}.work.${index}.position`)} 
            name="position" 
            defaultValue={job["position"]} 
          />
          <ResumioLabel htmlFor="startDate">Start Date</ResumioLabel>
          <ResumioInput 
            type='date'
            {...register(`resume.${resumeIndex}.work.${index}.startDate`)} 
            name="startDate" 
            defaultValue={job["startDate"]} 
          />
          <ResumioLabel htmlFor="endDate">End Date</ResumioLabel>
          <ResumioInput 
            type='date'
            {...register(`resume.${resumeIndex}.work.${index}.endDate`)} 
            name="endDate" 
            defaultValue={job["endDate"]} 
          />
          <ResumioLabel htmlFor="summary">Job Description</ResumioLabel>
          <ResumioTextArea 
            rows='3'
            {...register(`resume.${resumeIndex}.work.${index}.summary`)} 
            name="summary" 
            defaultValue={job["summary"]} 
          />
          <RepeatableItems 
            repeatable={job['highlights']}
            title={'highlights'} 
            parent={sectionType} 
            parentIndex={index}
            resumeIndex={resumeIndex}
          />
        </SectionFieldset>
    )
    })}
  </>)
  
}

export default WorkI

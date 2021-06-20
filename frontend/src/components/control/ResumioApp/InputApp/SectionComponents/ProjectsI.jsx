import React from 'react'
import { useFormContext } from 'react-hook-form'
import RepeatableItems from './RepeatableItems'
import {ResumioLabel, 
        ResumioInput,
        SectionLegend,
        SectionFieldset,
        } from '../../../../style/ResumioApp/InputApp/SectionStyles'

function ProjectsI({sectionData, sectionType, resumeIndex}) {
  const {register} = useFormContext()
  const regString = `resume.${resumeIndex}.${sectionType}.`

  return (
    <>
      {sectionData.map((project,index)=> {
        console.log(project)
        return(
          <SectionFieldset key={project.name}>
            <SectionLegend>{project.name}</SectionLegend>
            <ResumioLabel htmlFor="name">Project Name</ResumioLabel>
            <ResumioInput 
              {...register(regString +`${index}.name`)} 
              name="name" 
              defaultValue={project["name"]} 
            />
            <ResumioLabel htmlFor="projectType">Project Type</ResumioLabel>
            <ResumioInput 
              {...register(regString +`${index}.projectType`)} 
              name="projectType" 
              defaultValue={project["projectType"]} 
            />
             <ResumioLabel htmlFor="startDate">Start Date</ResumioLabel>
            <ResumioInput 
              type='date'
              {...register(regString +`${index}.startDate`)} 
              name="startDate" 
              defaultValue={project["startDate"]} 
            />
            <ResumioLabel htmlFor="endDate">End Date</ResumioLabel>
            <ResumioInput 
              type='date'
              {...register(regString +`${index}.endDate`)} 
              name="endDate" 
              defaultValue={project["endDate"]} 
            />
            <ResumioLabel htmlFor="description">Description</ResumioLabel>
            <ResumioInput 
              {...register(regString +`${index}.description`)} 
              name="description" 
              defaultValue={project["description"]} 
            />
            <RepeatableItems 
            repeatable={project['roles']}
            title={'roles'} 
            parent={sectionType} 
            parentIndex={index}
            resumeIndex={resumeIndex}
            />
            <RepeatableItems 
            repeatable={project['keywords']}
            title={'keywords'} 
            parent={sectionType} 
            parentIndex={index}
            resumeIndex={resumeIndex}
            />
            <RepeatableItems 
            repeatable={project['highlights']}
            title={'highlights'} 
            parent={sectionType} 
            parentIndex={index}
            resumeIndex={resumeIndex}
            />
            <ResumioLabel htmlFor="url">Project URL</ResumioLabel>
            <ResumioInput 
              {...register(regString +`${index}.url`)} 
              name="url" 
              defaultValue={project["url"]} 
            />
        </SectionFieldset>
        )
      })}
    </>
  )
}

export default ProjectsI

import React from 'react'
import { useFormContext } from 'react-hook-form'
import RepeatableItems from './RepeatableItems'
import {ResumioLabel, 
        ResumioInput,
        SectionLegend,
        SectionFieldset,
        } from '../../../../style/ResumioApp/InputApp/SectionStyles'

function ProjectsI({sectionData, registrationStr}) {
  const {register} = useFormContext()

  return (
    <>
      {sectionData.map((project,index)=> {
        console.log(project)
        return(
          <SectionFieldset key={project.name}>
            <SectionLegend>{project.name}</SectionLegend>
            <ResumioLabel htmlFor="name">Project Name</ResumioLabel>
            <ResumioInput 
              {...register(registrationStr + `${index}.name`)} 
              name="name" 
              defaultValue={project["name"]} 
            />
            <ResumioLabel htmlFor="projectType">Project Type</ResumioLabel>
            <ResumioInput 
              {...register(registrationStr + `${index}.projectType`)} 
              name="projectType" 
              defaultValue={project["projectType"]} 
            />
             <ResumioLabel htmlFor="startDate">Start Date</ResumioLabel>
            <ResumioInput 
              type='date'
              {...register(registrationStr + `${index}.startDate`)} 
              name="startDate" 
              defaultValue={project["startDate"]} 
            />
            <ResumioLabel htmlFor="endDate">End Date</ResumioLabel>
            <ResumioInput 
              type='date'
              {...register(registrationStr + `${index}.endDate`)} 
              name="endDate" 
              defaultValue={project["endDate"]} 
            />
            <ResumioLabel htmlFor="description">Description</ResumioLabel>
            <ResumioInput 
              {...register(registrationStr + `${index}.description`)} 
              name="description" 
              defaultValue={project["description"]} 
            />
            <RepeatableItems 
            repeatable={project['roles']}
            title={'roles'} 
            parentIndex={index}
            registrationStr={registrationStr}
            />
            <RepeatableItems 
            repeatable={project['keywords']}
            title={'keywords'} 
            parentIndex={index}
            registrationStr={registrationStr}
            />
            <RepeatableItems 
            repeatable={project['highlights']}
            title={'highlights'} 
            parentIndex={index}
            registrationStr={registrationStr}
            />
            <ResumioLabel htmlFor="url">Project URL</ResumioLabel>
            <ResumioInput 
              {...register(registrationStr + `${index}.url`)} 
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

import React from 'react'
import { useFormContext } from 'react-hook-form'
import {ResumioLabel, 
        ResumioInput,
        ResumioTextArea, 
        SectionLegend,
        SectionFieldset} from '../../../../style/ResumioApp/InputApp/SectionStyles'
import RepeatableItems from './RepeatableItems'

function SkillsI({sectionData, sectionType, resumeIndex}) {
  const {register} = useFormContext()
  return (
    <>
      {sectionData.map((skill, index) => {
        return (
          <SectionFieldset key={skill.name}>
            <ResumioLabel htmlFor="name">Skill Name</ResumioLabel>
            <ResumioInput 
              {...register(`resume.${resumeIndex}.skills.${index}.name`)} 
              name="name" 
              defaultValue={skill["name"]} 
            />
            <ResumioLabel htmlFor="level">Mastery Level</ResumioLabel>
            <ResumioInput 
              {...register(`resume.${resumeIndex}.skills.${index}.level`)} 
              name="level" 
              defaultValue={skill["title"]} 
            />
            <RepeatableItems 
              repeatable={skill['keywords']}
              title={'Keywords'} 
              parent={sectionType} 
              parentIndex={index}
              resumeIndex={resumeIndex}
            />

          </SectionFieldset>
        )
      }
      )}
    </>
  )
}

export default SkillsI

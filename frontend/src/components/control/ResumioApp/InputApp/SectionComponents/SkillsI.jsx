import React from 'react'
import { useFormContext } from 'react-hook-form'
import {ResumioLabel, 
        ResumioInput,
        SectionFieldset} from '../../../../style/ResumioApp/InputApp/SectionStyles'
import RepeatableItems from './RepeatableItems'

function SkillsI({sectionData, registrationStr}) {
  const {register} = useFormContext()
  return (
    <>
      {sectionData.map((skill, index) => {
        return (
          <SectionFieldset key={skill.name}>
            <ResumioLabel htmlFor="name">Skill Name</ResumioLabel>
            <ResumioInput 
              {...register(registrationStr + `${index}.name`)} 
              name="name" 
              defaultValue={skill["name"]} 
            />
            <ResumioLabel htmlFor="level">Mastery Level</ResumioLabel>
            <ResumioInput 
              {...register(registrationStr + `${index}.level`)} 
              name="level" 
              defaultValue={skill["title"]} 
            />
            <RepeatableItems 
              repeatable={skill['keywords']}
              title={'Keywords'}  
              parentIndex={index}
              registrationStr={registrationStr}
            />

          </SectionFieldset>
        )
      }
      )}
    </>
  )
}

export default SkillsI

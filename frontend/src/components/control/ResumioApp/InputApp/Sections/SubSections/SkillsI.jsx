import React from 'react'
import RepeatableItems from '../NestedSegments/RepeatableField'
import { useFormContext } from 'react-hook-form'
import {ResumioLabel, 
        ResumioInput,
        } from '../../../../../style/ResumioApp/InputApp/SectionStyles'


function SkillsI({subSectionObj, index, registrationStr}) {
  const {register} = useFormContext()
  return (
    <>
      <ResumioLabel htmlFor="name">Skill Name</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr + `${index}.name`)} 
        name="name" 
        defaultValue={subSectionObj["name"]} 
      />
      <ResumioLabel htmlFor="level">Mastery Level</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr + `${index}.level`)} 
        name="level" 
        defaultValue={subSectionObj["title"]} 
      />
      <RepeatableItems 
        repeatable={subSectionObj['keywords']}
        title={'Keywords'}  
        parentIndex={index}
        registrationStr={registrationStr}
      />
    </>
  )
}

export default SkillsI

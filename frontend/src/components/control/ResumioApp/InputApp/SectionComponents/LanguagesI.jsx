import React from 'react'
import { useFormContext } from 'react-hook-form'
import {ResumioLabel, 
        ResumioInput,
        SectionFieldset} from '../../../../style/ResumioApp/InputApp/SectionStyles'

function LanguagesI({sectionData, sectionType, resumeIndex}) {
  const {register} = useFormContext()
  return (
    <>
      {sectionData.map((language, index)=> {
        return(
          <SectionFieldset key={language.language}>
            <ResumioLabel htmlFor="language">Language</ResumioLabel>
            <ResumioInput 
              {...register(`resume.${resumeIndex}.${sectionType}.${index}.language`)} 
              name="language" 
              defaultValue={language["language"]} 
            />
            <ResumioLabel htmlFor="fluency">Fluency</ResumioLabel>
            <ResumioInput 
              {...register(`resume.${resumeIndex}.${sectionType}.${index}.fluency`)} 
              name="fluency" 
              defaultValue={language["fluency"]} 
            />
          </SectionFieldset>
        )
      })}
    </>
  )
}

export default LanguagesI

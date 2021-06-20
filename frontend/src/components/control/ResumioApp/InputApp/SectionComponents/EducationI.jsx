import React from 'react'
import { useFormContext } from 'react-hook-form'
import RepeatableItems from './RepeatableItems'
import {ResumioLabel, 
        ResumioInput,
        SubSectionTitle,
        SectionFieldset,
        } from '../../../../style/ResumioApp/InputApp/SectionStyles'

function EducationI({sectionData, registrationStr}) {
  const {register} = useFormContext()

  return (
    <>
      {sectionData.map((institution, index) => {
        return (
          <SectionFieldset key={institution.institution}>
            <SubSectionTitle>{institution.institution}</SubSectionTitle>
            <ResumioLabel htmlFor="institution">Institution</ResumioLabel>
            <ResumioInput 
              {...register(registrationStr + `${index}.institution`)} 
              name="institution" 
              defaultValue={institution["institution"]} 
            />
            <ResumioLabel htmlFor="url">Institution URL</ResumioLabel>
            <ResumioInput 
              {...register(registrationStr + `${index}.url`)} 
              name="url" 
              defaultValue={institution["url"]} 
            />
            <ResumioLabel htmlFor="area">Area of Study</ResumioLabel>
            <ResumioInput 
              {...register(registrationStr + `${index}.area`)} 
              name="area" 
              defaultValue={institution["area"]} 
            />
            <ResumioLabel htmlFor="institution">Institution</ResumioLabel>
            <ResumioInput 
              {...register(registrationStr + `${index}.institution`)} 
              name="institution" 
              defaultValue={institution["institution"]} 
            />
            <ResumioLabel htmlFor="studyType">Degree or Program</ResumioLabel>
            <ResumioInput 
              {...register(registrationStr + `${index}.studyType`)} 
              name="studyType" 
              defaultValue={institution["studyType"]} 
            />
            <ResumioLabel htmlFor="startDate">Start Date</ResumioLabel>
            <ResumioInput 
              type='date'
              {...register(registrationStr + `${index}.startDate`)} 
              name="startDate" 
              defaultValue={institution["startDate"]} 
            />
            <ResumioLabel htmlFor="endDate">End Date</ResumioLabel>
            <ResumioInput 
              type='date'
              {...register(registrationStr + `${index}.endDate`)} 
              name="endDate" 
              defaultValue={institution["endDate"]} 
            />
            <RepeatableItems
              repeatable={institution['courses']}
              title={'courses'}  
              parentIndex={index}
              registrationStr={registrationStr}
            />
          </SectionFieldset>
        )
      })}
    </>
  )
}

export default EducationI

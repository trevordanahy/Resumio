import React from 'react'
import { useFormContext } from 'react-hook-form'
import {ResumioLabel, 
        ResumioInput,
        ResumioTextArea, 
        SectionLegend,
        SectionFieldset} from '../../../../style/ResumioApp/InputApp/SectionStyles'

function PublicationsI({sectionData, sectionType, resumeIndex}) {
  const {register} = useFormContext()
  return (
    <>
      {sectionData.map((publication, index) => {
        return(
          <SectionFieldset key={`${publication.name}_${publication.releaseDate}`}>
            <SectionLegend>{publication.name}</SectionLegend>
            <ResumioLabel htmlFor="name">Publication Title</ResumioLabel>
            <ResumioInput 
              {...register(`resume.${resumeIndex}.publications.${index}.name`)} 
              name="name" 
              defaultValue={publication["name"]}
            />
            <ResumioLabel htmlFor="name">Publisher</ResumioLabel>
            <ResumioInput 
              {...register(`resume.${resumeIndex}.publications.${index}.publisher`)} 
              name="publisher" 
              defaultValue={publication["publisher"]}
            />
            <ResumioLabel htmlFor="releaseDate">Publication Date</ResumioLabel>
            <ResumioInput 
              {...register(`resume.${resumeIndex}.publications.${index}.releaseDate`)}
              type='date' 
              name="releaseDate" 
              defaultValue={publication["releaseDate"]}
            />
            <ResumioLabel htmlFor="summary">Synopsis</ResumioLabel>
            <ResumioTextArea 
            rows='4'
            {...register(`resume.${resumeIndex}.publications.${index}.summary`)} 
            name="summary" 
            defaultValue={publication["summary"]} 
            />
            <ResumioLabel htmlFor="url">URL</ResumioLabel>
            <ResumioInput 
              {...register(`resume.${resumeIndex}.publications.${index}.url`)}
              name="url" 
              defaultValue={publication["url"]}
            />
          </SectionFieldset>
        )
      })}
    </>
  )
}

export default PublicationsI

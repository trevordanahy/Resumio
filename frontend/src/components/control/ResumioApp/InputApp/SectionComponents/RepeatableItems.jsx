import React, {useState} from 'react'
import { useFormContext } from 'react-hook-form'
import {
        SectionFieldset,
        ResumioTextArea,
        SubSectionTitle
        } from '../../../../style/ResumioApp/InputApp/SectionStyles'

function RepeatableItems({repeatable, title, parentIndex, registrationStr}) {
  const {register} = useFormContext()
  const [repeatableArray, setRepeatableArray] = useState(repeatable)

  function addRepeatable(e){
    e.preventDefault()
    const newRepeatableArray = [...repeatableArray, '']
    setRepeatableArray(newRepeatableArray)
  }

  return (
    <SectionFieldset>
      <SubSectionTitle>{title}</SubSectionTitle>
      {repeatableArray.map((item, index) => {
        return (
          <ResumioTextArea key={`${title}_${index}`}
            rows='2'
            {...register(registrationStr +`${parentIndex}.${title}.${index}`)} 
            name={`${title}.${index}`} 
            defaultValue={item} 
          />
        )
      })}
      <button onClick={addRepeatable}>+</button>
    </SectionFieldset>
  )
}

export default RepeatableItems

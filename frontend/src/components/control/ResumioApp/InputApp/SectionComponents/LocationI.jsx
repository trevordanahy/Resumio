import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ResumioLabel, 
  ResumioInput,
  SectionFieldset, 
  SectionLegend} from '../../../../style/ResumioApp/InputApp/SectionStyles'

function LocationI({location, parent, resumeIndex}) {
  const {register} = useFormContext()

  return (
    <SectionFieldset>
      <SectionLegend>Location</SectionLegend>
      <ResumioLabel htmlFor="address">Address</ResumioLabel>
      <ResumioInput 
        {...register(`resume.${resumeIndex}.${parent}.location.address`)} 
        name="address" 
        defaultValue={location["address"]}
      />
      <ResumioLabel htmlFor="addressLine2">Address Line 2</ResumioLabel>
      <ResumioInput 
        {...register(`resume.${resumeIndex}.${parent}.location.addressLine2`)} 
        name="addressLine2" 
        defaultValue={location["addressLine2"]}
      />
      <ResumioLabel htmlFor="city">City</ResumioLabel>
      <ResumioInput 
        {...register(`resume.${resumeIndex}.${parent}.location.city`)} 
        name="city" 
        defaultValue={location["city"]}
      />
      <ResumioLabel htmlFor="region">Region(State)</ResumioLabel>
      <ResumioInput 
        {...register(`resume.${resumeIndex}.${parent}.location.region`)} 
        name="region" 
        defaultValue={location["region"]}
      />
      <ResumioLabel htmlFor="postalCode">Postal Code</ResumioLabel>
      <ResumioInput 
        {...register(`resume.${resumeIndex}.${parent}.location.postalCode`)} 
        name="postalCode" 
        defaultValue={location["postalCode"]}
      />
      <ResumioLabel htmlFor="countryCode">Country Code</ResumioLabel>
      <ResumioInput 
        {...register(`resume.${resumeIndex}.${parent}.location.countryCode`)} 
        name="countryCode" 
        defaultValue={location["countryCode"]}
      />
    </SectionFieldset>
  )
}

export default LocationI

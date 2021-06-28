import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ResumioLabel, 
  ResumioInput,
  SectionFieldset, 
  SectionLegend} from '../../../../../style/ResumioApp/InputApp/SectionStyles'

function LocationI({location, parentIndex, registrationStr}) {
  const {register} = useFormContext()

  /* some sections are repeatable and need a parent index to format
  properly on submit. This allows the component to be used 
  in repeated and non-repeated sections */
  function makeRegString (parentIndex){
    if (parentIndex || parentIndex === 0){
      return (registrationStr + `${parentIndex}.location.` )
    } else {
      return (registrationStr + 'location.')
    }
  }

  const regString = makeRegString(parentIndex)

  return (
    <SectionFieldset>
      <SectionLegend>Location</SectionLegend>
      <ResumioLabel htmlFor="address">Address</ResumioLabel>
      <ResumioInput 
        {...register(regString + 'address', {shouldUnregister: true})} 
        name="address" 
        defaultValue={location["address"]}
      />
      <ResumioLabel htmlFor="addressLine2">Address Line 2</ResumioLabel>
      <ResumioInput 
        {...register(regString + 'addressLine2', {shouldUnregister: true})} 
        name="addressLine2" 
        defaultValue={location["addressLine2"]}
      />
      <ResumioLabel htmlFor="city">City</ResumioLabel>
      <ResumioInput 
        {...register(regString + 'city', {shouldUnregister: true})} 
        name="city" 
        defaultValue={location["city"]}
      />
      <ResumioLabel htmlFor="region">Region(State)</ResumioLabel>
      <ResumioInput 
        {...register(regString + 'region', {shouldUnregister: true})} 
        name="region" 
        defaultValue={location["region"]}
      />
      <ResumioLabel htmlFor="postalCode">Postal Code</ResumioLabel>
      <ResumioInput 
        {...register(regString + 'postalCode', {shouldUnregister: true})} 
        name="postalCode" 
        defaultValue={location["postalCode"]}
      />
      <ResumioLabel htmlFor="countryCode">Country Code</ResumioLabel>
      <ResumioInput 
        {...register(regString + 'countryCode', {shouldUnregister: true})} 
        name="countryCode" 
        defaultValue={location["countryCode"]}
      />
    </SectionFieldset>
  )
}

export default LocationI

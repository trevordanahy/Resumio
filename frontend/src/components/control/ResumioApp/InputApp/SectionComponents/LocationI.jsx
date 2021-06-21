import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ResumioLabel, 
  ResumioInput,
  SectionFieldset, 
  SectionLegend} from '../../../../style/ResumioApp/InputApp/SectionStyles'

function LocationI({location, parent, parentIndex, registrationStr}) {
  const {register} = useFormContext()

  function makeRegString (parentIndex){
    if (parentIndex || parentIndex === 0){
      return (registrationStr + `${parentIndex}.contact` )
    } else {
      return (registrationStr + 'contact')
    }
  }

  const regString = makeRegString(parentIndex)

  return (
    <SectionFieldset>
      <SectionLegend>Location</SectionLegend>
      <ResumioLabel htmlFor="address">Address</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr + 'address')} 
        name="address" 
        defaultValue={location["address"]}
      />
      <ResumioLabel htmlFor="addressLine2">Address Line 2</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr + 'addressLine2')} 
        name="addressLine2" 
        defaultValue={location["addressLine2"]}
      />
      <ResumioLabel htmlFor="city">City</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr + 'city')} 
        name="city" 
        defaultValue={location["city"]}
      />
      <ResumioLabel htmlFor="region">Region(State)</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr + 'region')} 
        name="region" 
        defaultValue={location["region"]}
      />
      <ResumioLabel htmlFor="postalCode">Postal Code</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr + 'postalCode')} 
        name="postalCode" 
        defaultValue={location["postalCode"]}
      />
      <ResumioLabel htmlFor="countryCode">Country Code</ResumioLabel>
      <ResumioInput 
        {...register(registrationStr + 'countryCode')} 
        name="countryCode" 
        defaultValue={location["countryCode"]}
      />
    </SectionFieldset>
  )
}

export default LocationI

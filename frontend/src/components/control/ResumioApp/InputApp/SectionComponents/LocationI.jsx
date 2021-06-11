import React from 'react'
import { ResumioLabel, 
  ResumioInput,
  SectionFieldset, 
  SectionLegend} from '../../../../style/ResumioApp/InputApp/SectionStyles'

function LocationI({location}) {

  console.log(location)
  return (
    <SectionFieldset>
      <SectionLegend>Location</SectionLegend>
      <ResumioLabel htmlFor="address">Address</ResumioLabel>
      <ResumioInput id="address" name="address" defaultValue={location["address"]}/>
      <ResumioLabel htmlFor="addressLine2">Address Line 2</ResumioLabel>
      <ResumioInput id="addressLine2" name="addressLine2" defaultValue={location["addressLine2"]}/>
      <ResumioLabel htmlFor="city">City</ResumioLabel>
      <ResumioInput id="city" name="city" defaultValue={location["city"]}/>
      <ResumioLabel htmlFor="region">Region(State)</ResumioLabel>
      <ResumioInput id="region" name="region" defaultValue={location["region"]}/>
      <ResumioLabel htmlFor="postalCode">Postal Code</ResumioLabel>
      <ResumioInput id="postalCode" name="postalCode" defaultValue={location["postalCode"]}/>
      <ResumioLabel htmlFor="countryCode">Country Code</ResumioLabel>
      <ResumioInput id="countryCode" name="countryCode" defaultValue={location["countryCode"]}/>
    </SectionFieldset>
  )
}

export default LocationI

import React from 'react'
import BasicsI from './SectionComponents/BasicsI'
import EducationI from './SectionComponents/EducationI'
import VolunteerI from './SectionComponents/VolunteerI'
import WorkI from './SectionComponents/WorkI'

function SectionSwitch({sectionType, sectionData, resumeIndex }) {



  switch(sectionType){
    case 'basics':
      return <BasicsI 
                sectionType={sectionType} 
                sectionData={sectionData} 
                resumeIndex={resumeIndex}
              />
    case 'work':
      return <WorkI 
                sectionType={sectionType}
                sectionData={sectionData} 
                resumeIndex={resumeIndex}
              />
    case 'volunteer':
      return <VolunteerI
                sectionType={sectionType}
                sectionData={sectionData} 
                resumeIndex={resumeIndex}
              />
    case 'education':
      return <EducationI
                sectionType={sectionType}
                sectionData={sectionData} 
                resumeIndex={resumeIndex}
              />
    case 'awards':
      return <div>awards</div>
    case 'publications':
      return <div>Publications</div>
    case 'skills':
      return <div>Skills</div>
    case 'languages':
      return <div>Languages</div>
    case 'references':
      return <div>References</div>
    case 'projects':
      return <div>Projects</div>
    default:
      return null
  }
}

export default SectionSwitch

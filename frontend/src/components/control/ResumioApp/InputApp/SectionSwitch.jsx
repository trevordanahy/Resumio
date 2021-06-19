import React from 'react'
import AwardsI from './SectionComponents/AwardsI'
import BasicsI from './SectionComponents/BasicsI'
import EducationI from './SectionComponents/EducationI'
import PublicationsI from './SectionComponents/PublicationsI'
import SkillsI from './SectionComponents/SkillsI'
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
      return <AwardsI
                sectionType={sectionType}
                sectionData={sectionData} 
                resumeIndex={resumeIndex}
              />
    case 'publications':
      return <PublicationsI 
                sectionType={sectionType}
                sectionData={sectionData} 
                resumeIndex={resumeIndex}
              />
    case 'skills':
      return <SkillsI
                sectionType={sectionType}
                sectionData={sectionData} 
                resumeIndex={resumeIndex}
              />
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

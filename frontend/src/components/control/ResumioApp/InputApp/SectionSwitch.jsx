import React from 'react'
import AwardsI from './SectionComponents/AwardsI'
import BasicsI from './SectionComponents/BasicsI'
import EducationI from './SectionComponents/EducationI'
import LanguagesI from './SectionComponents/LanguagesI'
import ProjectsI from './SectionComponents/ProjectsI'
import PublicationsI from './SectionComponents/PublicationsI'
import ReferencesI from './SectionComponents/ReferencesI'
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
      return <LanguagesI 
                sectionType={sectionType}
                sectionData={sectionData} 
                resumeIndex={resumeIndex}
             />
    case 'references':
      return <ReferencesI 
                sectionType={sectionType}
                sectionData={sectionData} 
                resumeIndex={resumeIndex}
             />
    case 'projects':
      return <ProjectsI 
                sectionType={sectionType}
                sectionData={sectionData} 
                resumeIndex={resumeIndex}
              />
    default:
      return null
  }
}

export default SectionSwitch

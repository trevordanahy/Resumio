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
  const registrationStr = `resume.${resumeIndex}.${sectionType}.`

  switch(sectionType){
    case 'basics':
      return <BasicsI 
                registrationStr={registrationStr} 
                sectionData={sectionData} 
              />
    case 'work':
      return <WorkI 
                registrationStr={registrationStr} 
                sectionData={sectionData}
              />
    case 'volunteer':
      return <VolunteerI
                registrationStr={registrationStr} 
                sectionData={sectionData}
              />
    case 'education':
      return <EducationI
                registrationStr={registrationStr} 
                sectionData={sectionData}
              />
    case 'awards':
      return <AwardsI
                registrationStr={registrationStr} 
                sectionData={sectionData}
              />
    case 'publications':
      return <PublicationsI 
                registrationStr={registrationStr} 
                sectionData={sectionData}
              />
    case 'skills':
      return <SkillsI
                registrationStr={registrationStr} 
                sectionData={sectionData}
              />
    case 'languages':
      return <LanguagesI 
                registrationStr={registrationStr} 
                sectionData={sectionData}
             />
    case 'references':
      return <ReferencesI 
                registrationStr={registrationStr} 
                sectionData={sectionData}
             />
    case 'projects':
      return <ProjectsI 
                registrationStr={registrationStr} 
                sectionData={sectionData}
              />
    default:
      return null
  }
}

export default SectionSwitch

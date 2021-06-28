import React from 'react'
import AwardsI from './AwardsI'
import EducationI from './EducationI'
import LanguagesI from './LanguagesI'
import ProjectsI from './ProjectsI'
import PublicationsI from './PublicationsI'
import ReferencesI from './ReferencesI'
import SkillsI from './SkillsI'
import VolunteerI from './VolunteerI'
import WorkI from './WorkI'

function SubSectionProvider({subSectionType, subSectionObj, registrationStr, index }) {
  switch(subSectionType){
    case 'work':
      return <WorkI 
                registrationStr={registrationStr} 
                subSectionObj={subSectionObj}
                index={index}
              />
    case 'volunteer':
      return <VolunteerI
                registrationStr={registrationStr} 
                subSectionObj={subSectionObj}
                index={index}
              />
    case 'education':
      return <EducationI
                registrationStr={registrationStr} 
                subSectionObj={subSectionObj}
                index={index}
              />
    case 'awards':
      return <AwardsI
                registrationStr={registrationStr} 
                subSectionObj={subSectionObj}
                index={index}
              />
    case 'publications':
      return <PublicationsI 
                registrationStr={registrationStr} 
                subSectionObj={subSectionObj}
                index={index}
              />
    case 'skills':
      return <SkillsI
                registrationStr={registrationStr} 
                subSectionObj={subSectionObj}
                index={index}
              />
    case 'languages':
      return <LanguagesI 
                registrationStr={registrationStr} 
                subSectionObj={subSectionObj}
                index={index}
             />
    case 'references':
      return <ReferencesI 
                registrationStr={registrationStr} 
                subSectionObj={subSectionObj}
                index={index}
             />
    case 'projects':
      return <ProjectsI 
                registrationStr={registrationStr} 
                subSectionObj={subSectionObj}
                index={index}
              />
    default:
      return null
  }
}

export default SubSectionProvider

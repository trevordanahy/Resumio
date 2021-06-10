import React from 'react'

function SectionSwitch({sectionType}) {
  switch(sectionType){
    case 'basics':
      return <div>Basics</div>
    case 'work':
      return <div>Work</div>
    case 'volunteer':
      return <div>Volunteer</div>
    case 'education':
      return <div>Education</div>
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

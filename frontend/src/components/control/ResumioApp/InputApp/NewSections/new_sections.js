export const blankSections = {
  basics: {
    "basics": {
      "contact": {
        "firstName": "",
        "lastName": "",
        "email": "",
        "phone": ""
      },
      "jobTitle": "",
      "img": "",
      "url": "",
      "summary": "",
      "location": {
        "address": "",
        "addressLine2": " ",
        "postalCode": "",
        "city": "",
        "countryCode": "",
        "region": ""
      },
      "profiles": [
        {
          "network": "",
          "username": "",
          "url": ""
        }
      ]
    }
  },
  work: {
    "work": [
      {
        "name": "",
        "location": {
          "address": "",
          "addressLine2": "",
          "postalCode": "",
          "city": "",
          "countryCode": "",
          "region": ""
        },
        "position": "",
        "url": "",
        "startDate": "",
        "endDate": "",
        "summary": "",
        "highlights": [""]
      }
    ]
  },
  volunteer: {
    "volunteer": [
      {
        "organization": "",
        "position": "",
        "url": "",
        "startDate": "",
        "endDate": "",
        "summary": "",
        "highlights": [""]
      }
    ]
  },
  education: {
    "education": [
      {
        "institution": "",
        "url": "",
        "area": "",
        "studyType": "",
        "startDate": "",
        "endDate": "",
        "score": "",
        "courses": [""]
      }
    ]
  },
  awards: {
    "awards": [
      {
        "title": "",
        "date": "",
        "awarder": "",
        "summary": ""
      }
    ]
  },
  publications: {
    "publications": [
      {
        "name": "",
        "publisher": "",
        "releaseDate": "",
        "url": "",
        "summary": ""
      }
    ]
  },
  skills: {
    "skills": [
      {
        "name": "",
        "level": "",
        "keywords": [""]
      }
    ]
  },
  languages: {
    "languages": [
      {
        "language": "",
        "fluency": ""
      }
    ]
  },
  references: {
    "references": [
      {
        "contact": {
          "firstName": "",
          "lastName": "",
          "email": "",
          "phone": ""
        },
        "relationship": "",
        "reference": ""
      }
    ]
  },
  projects: {
    "projects": [
      {
        "name": "",
        "description": "",
        "highlights": [""],
        "keywords": [""],
        "startDate": "",
        "endDate": "",
        "url": "",
        "roles": [""],
        "entity": "",
        "projectType": ""
      }
    ]
  }
}

export const newDraft = {
  title: "",
  resume: [blankSections.basics],
  created: "2019-12-01",
  modified: "2021-01-01"
}


export function addSection(sectionName) {
  switch (sectionName) {
    case 'basics':
      return blankSections.basics
    case 'work':
      return blankSections.work
    case 'volunteer':
      return blankSections.volunteer
    case 'education':
      return blankSections.education
    case 'awards':
      return blankSections.awards
    case 'publications':
      return blankSections.publications
    case 'skills':
      return blankSections.skills
    case 'languages':
      return blankSections.languages
    case 'references':
      return blankSections.references
    case 'projects':
      return blankSections.projects
  }
}



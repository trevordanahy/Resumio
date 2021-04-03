from typing import List, Optional
from pydantic import BaseModel, PrivateAttr, Field
import uuid

# Sub Models used to


class Contact(BaseModel):
    firstName: str
    lastName: str
    phone: str
    email: str

    class Config:
        schema_extra = {
            "example": {
                "firstName": "Carl",
                "lastName": "Gauss",
                "email": "thebest@stats.com",
                "phone": "303-867-5309"
            }
        }


class Location(BaseModel):
    address: str
    addressLine2: Optional[str]
    postalCode: str
    city: str
    countryCode: str
    region: str

    class Config:
        schema_extra = {
            "example": {
                "address": "123 fake street",
                "addressLine2": "Suite #35",
                "postalCode": "12345",
                "city": "Bangor",
                "countryCode": "US",
                "region": "Maine"
            }
        }


class Profile(BaseModel):
    network: str
    username: str
    url: str

    class Config:
        schema_extra = {
            "example": [{
                "network": "twitter",
                "username": "bttz",
                "url": "www.twitter.com"
            }]
        }


class Basics(BaseModel):
    contact: Contact
    jobTitle: str
    img: str
    url: str
    summary: str
    location: Optional[Location]
    profiles: Optional[List[Profile]]

    class Config:
        schema_extra = {
            "example": {
                "contact": Contact.Config.schema_extra["example"],
                "jobTitle": "Mathmatician",
                "img": "https://imgur.com/gallery/bE9Zp8D",
                "url": "https://en.wikipedia.org/wiki/Carl_Friedrich_Gauss",
                "summary": "A mathmatician with strong statistical skills looking for acuary jobs",
                "location": Location.Config.schema_extra["example"],
                "profiles": Profile.Config.schema_extra["example"]
            }
        }


class Work(BaseModel):
    name: str
    location: Location
    description: str
    position: str
    url: str
    startDate: str
    endDate: str
    summary: str
    highlights: List[str]

    class Config:
        schema_extra = {
            "example": [{
                "name": "Strictland Propane",
                "location": Location.Config.schema_extra["example"],
                "description": "Propane and Propane Accessories",
                "position": "Assistant Manager",
                "url": "https://kingofthehill.fandom.com/wiki/Strickland_Propane",
                "startDate": "2013-12-01",
                "endDate": "2014-12-01",
                "summary": "Taste the meat not the heat.",
                "highlights": [
                    "Top seller of vaugner charking",
                    "Received the blue flame from the propane association"
                ]
            }]
        }


class Volunteer(BaseModel):
    organization: str
    position: str
    url: str
    startDate: str
    endDate: str
    summary: str
    highlights: list

    class Config:
        schema_extra = {
            "example": [{
                "organization": "Engineers without Borders",
                "position": "Civil Engineer",
                "url": "https://www.ewb-usa.org/",
                "startDate": "2013-12-01",
                "endDate": "2014-12-01",
                "summary": "Setup water well for village",
                "highlights": [
                    "Built water pump with local supplies",
                    "Managed team overseas"
                ]
            }]
        }


class Education(BaseModel):
    institution: str
    url: str
    area: str
    studyType: str
    startDate: str
    endDate: str
    score: str
    courses: list

    class Config:
        schema_extra = {
            "example": [{
                "institution": "Underwater Basketweaver State",
                "url": "www.ubs.edu",
                "area": "Underwater Basket Weaving",
                "studyType": "Bachlors",
                "startDate": "2013-12-01",
                "endDate": "2014-12-01",
                "score": "3.7",
                "courses": [
                    "Diving 101",
                    "Weaving 304"
                ]
            }]
        }


class Award(BaseModel):
    title: str
    date: str
    awarder: str
    summary: str

    class Config:
        schema_extra = {
            "example": [{
                "title": "Nobel Prize",
                "date": "2014-12-01",
                "awarder": "Nobel Institute",
                "summary": "Ground breaking reasearch changed the world."
            }]
        }


class Publication(BaseModel):
    name: str
    publisher: str
    releaseDate: str
    url: str
    summary: str

    class Config:
        schema_extra = {
            "example": [{
                "name": "Effects of Fasting on Metabolism",
                "publisher": "Nature",
                "releaseDate": "2014-12-01",
                "url": "www.nature.com",
                "summary": "Double blind 10 year study of the effects of fasting."
            }]
        }


class Skill(BaseModel):
    name: str
    level: str
    keywords: list

    class Config:
        schema_extra = {
            "example": [{
                "name": "Web Development",
                "level": "Intermediate",
                "keywords": [
                    "Javascript",
                    "Django",
                    "Node.js"
                ]
            }]
        }


class Language(BaseModel):
    language: str
    fluency: str

    class Config:
        schema_extra = {
            "example": [{
                "language": "Spanish",
                "fluency": "Conversational"
            }]
        }


class Interest(BaseModel):
    name: str
    keywords: list

    class Config:
        schema_extra = {
            "example": [{
                "name": "Snowboarding",
                "keywords": [
                    "shredding",
                    "gnar pow"
                ]
            }]
        }


class Reference(BaseModel):
    contact: Optional[Contact]
    reference: str

    class Config:
        schema_extra = {
            "example": [{
                "contact": Contact.Config.schema_extra["example"],
                "reference": "They draw the best graphs"
            }]
        }


class Project(BaseModel):
    name: str
    description: str
    highlights: list
    keywords: list
    startDate: str
    endDate: str
    url: str
    roles: list
    entity: str
    project_type: str

    class Config:
        schema_extra = {
            "example": [{
                "name": "Squirel Obstacle Course",
                "description": "An obstacle course for squirrels with treat at the end.",
                "highlights": [
                    "Over 60 million youtube views",
                    "2 million likes"
                ],
                "keywords": [
                    "self project",
                    "woodworking",
                    "projectiles"
                ],
                "startDate": "2013-12-01",
                "endDate": "2014-12-01",
                "url": "https://www.youtube.com/watch?v=hFZFjoX2cGg",
                "roles": ["project lead", "cameraman"],
                "entity": "Mark Rober Labs",
                "project_type": "Obstacle Course"
            }]
        }


class Resume(BaseModel):
    basics: Basics
    work: Optional[List[Work]]
    volunteer: Optional[List[Volunteer]]
    education: Optional[List[Education]]
    awards: Optional[List[Award]]
    publications: Optional[List[Publication]]
    skills: Optional[List[Skill]]
    languages: Optional[List[Language]]
    interests: Optional[List[Interest]]
    references: Optional[List[Reference]]
    projects: Optional[List[Project]]

    class Config:
        schema_extra = {
            "example": {
                "basics": Basics.Config.schema_extra["example"],
                "work": Work.Config.schema_extra["example"],
                "volunteer": Volunteer.Config.schema_extra["example"],
                "education": Education.Config.schema_extra["example"],
                "awards": Award.Config.schema_extra["example"],
                "publications": Publication.Config.schema_extra["example"],
                "skills": Skill.Config.schema_extra["example"],
                "languages": Language.Config.schema_extra["example"],
                "references": Reference.Config.schema_extra["example"],
                "projects": Project.Config.schema_extra["example"],
            }
        }


# Models to be exported for use in the app
class Draft(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    title: str
    resume: Resume
    created: str
    modified: str
    owner: Optional[str]

    class Config:
        schema_extra = {
            "example": {
                "title": "Aerospace Draft",
                "resume": Resume.Config.schema_extra["example"],
                "created": "2019-12-01",
                "modified": "2021-01-01"
            }
        }

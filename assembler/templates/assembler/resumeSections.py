resumeSections = {
    "contactInfo": {
        "type": "section",
        "sectionName": "Contact Info",
        "repeatable": False,
        "fieldsets": {
            "main": {
                "repeatable": False,
                "fieldsetName": "contactInfoMain",
                "inputs": {
                    "firstname": {
                        "type": "text",
                        "label": "First Name:",
                        "class": "original"
                    },
                    "lastName": {
                        "type": "text",
                        "label": "Last Name:",
                        "class": "original"
                    },
                    "phone": {
                        "type": "tel",
                        "pattern": "[0-9]{3}-[0-9]{3}-[0-9]{4}",
                        "placeholder": "123-456-7890",
                        "label": "Phone:",
                        "class": "original"
                    },
                    "email": {
                        "type": "email",
                        "label": "Email:",
                        "class": "original"
                    },
                    "personalWebsite": {
                        "type": "url",
                        "label": "Website:",
                        "class": "original"
                    }
                }
            }
        }
    },
    "objective": {
        "type": "section",
        "sectionName": "Objective",
        "repeatable": False,
        "fieldsets":{
            "main":{
                "repeatable": False,
                "fieldsetName": "objectiveMain",
                "inputs":{
                    "objective":{
                        "type": "textarea",
                        "rows": "5",
                        "columns": "40",
                        "placeholder": "A brief summary of your professional goals",
                        "class": "original"
                    }
                }
            }
        }
    },
    "skills": {
        "type": "section",
        "sectionName": "Skills",
        "repeatable": False,
        "fieldsets":{
            "main":{
                "repeatable": True,
                "repeatBttnName": "Add Skill",
                "fieldsetName": "skillsMain",
                "inputs": {
                    "skill":{
                        "type": "text",
                        "maxlength": "50",
                        "class": "original"
                    }
                }
            }
        }
    },
    "workHistory":{
        "type": "section",
        "sectionName": "Work History",
        "repeatable": True,
        "repeatBttnName": "Add Job",
        "repCount": 0,
        "fieldsets":{
            "main": {
                "repeatable": False,
                "fieldsetName": "CompanyInfo",
                "inputs": {
                    "companyName":{
                        "type": "text",
                        "label": "Company Name:",
                        "class": "original"
                    },
                    "startDate":{
                        "type": "month",
                        "label": "Start Date(month):",
                        "class": "original"
                    },
                    "endDate":{
                        "type": "month",
                        "Label": "End Date(month):",
                        "class": "original"
                    },
                    "companyPhone": {
                        "type": "tel",
                        "pattern": "[0-9]{3}-[0-9]{3}-[0-9]{4}",
                        "placeholder": "123-456-7890",
                        "label": "Company Phone:",
                        "class": "original"
                    },
                    "companyAddress": {
                        "type": "text",
                        "label": "Address:",
                        "class": "original"
                    },
                    "companyState": {
                        "type": "text",
                        "maxlength": "2",
                        "size": "2",
                        "label": "State",
                        "class": "original"
                    },
                    "companyZip": {
                        "type": "number",
                        "maxlength": "5",
                        "label": "Zip Code",
                        "class": "original"
                    },
                    "jobTitle": {
                        "type": "text",
                        "label": "Job Title:",
                        "class": "original"
                    }
                }
            },
            "responsibilities": {
                "repeatable": True,
                "repeatBttnName": "Add Responsibility",
                "fieldsetName": "responsibilities",
                "inputs": {
                    "responsibility": {
                        "type": "text",
                        "maxlength": "140",
                        "placeholder": "Responsibility or duties",
                        "class": "original"
                    }
                }
            }
        }
    },
    "references":{
        "type": "section",
        "sectionName": "References",
        "repeatable": True,
        "repeatBttnName": "Add Reference",
        "fieldsets":{
            "main":{
                "repeatable": False,
                "fieldsetName": "skillsMain",
                "inputs": {
                    "firstname": {
                        "type": "text",
                        "label": "First Name:",
                        "class": "original"
                    },
                    "lastName": {
                        "type": "text",
                        "label": "Last Name:",
                        "class": "original"
                    },
                    "phone": {
                        "type": "tel",
                        "pattern": "[0-9]{3}-[0-9]{3}-[0-9]{4}",
                        "placeholder": "123-456-7890",
                        "label": "Phone:",
                        "class": "original"
                    },
                    "email": {
                        "type": "email",
                        "label": "Email:",
                        "class": "original"
                    },
                    "relationship": {
                        "type": "text",
                        "label": "Relationship:",
                        "class": "original"
                    },
                    "knownFor": {
                        "type": "number",
                        "label": "Known For: (years)",
                        "maxlength": "3",
                        "class": "original"
                    }
                }
            }
        }
    },
    "accomplishments": {
        "type": "section",
        "sectionName": "Accomplishments",
        "repeatable": True,
        "repeatBttnName": "Add Accomplishment",
        "fieldsets":{
            "main": {
                "repeatable": False,
                "fieldsetName": "skillsMain",
                "inputs": {
                    "title:": {
                        "type": "text",
                        "label": "Title",
                        "class": "original"
                    },
                    "description": {
                        "type": "textarea",
                        "rows": "2",
                        "placeholder": "A brief description.",
                        "class": "original"
                    }
                }
            }
        }
    },
    "volunteering": {
        "type": "section",
        "sectionName": "Volunteering",
        "repeatable": True,
        "repeatBttnName": "Add Organization",
        "fieldsets":{
            "main":{
                "repeatable": False,
                "fieldsetName":"volunteeringMain",
                "inputs": {
                    "orgName":{
                        "type": "text",
                        "label": "Organization Name:",
                        "class": "original"
                    },
                    "phone":{
                        "type": "tel",
                        "pattern": "[0-9]{3}-[0-9]{3}-[0-9]{4}",
                        "placeholder": "123-456-7890",
                        "label": "Phone:",
                        "class": "original"
                    },
                    "email":{
                        "type": "email",
                        "label": "Org Email:",
                        "class": "original"
                    }
                }
            },
            "contributions": {
                "repeatable": True,
                "repeatBttnName": "Add Contribution",
                "fieldsetName":"volunteeringContributions",
                "inputs": {
                    "contribution": {
                        "type": "text",
                        "placeholder": "contribution",
                        "class": "original"
                    }
                }
            }
        }
    }
}

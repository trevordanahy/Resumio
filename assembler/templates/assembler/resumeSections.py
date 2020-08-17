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
                        "index": 1
                    },
                    "lastName": {
                        "type": "text",
                        "label": "Last Name:",
                        "index": 2
                    },
                    "phone": {
                        "type": "tel",
                        "pattern": "[0-9]{3}-[0-9]{3}-[0-9]{4}",
                        "placeholder": "123-456-7890",
                        "label": "Phone:",
                        "index": 3
                    },
                    "email": {
                        "type": "email",
                        "label": "Email:",
                        "index": 4
                    },
                    "personalWebsite": {
                        "type": "url",
                        "label": "Website:",
                        "index": 5
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
                        "rows": "15",
                        "columns": "40",
                        "placeholder": "A brief summary of your professional goals",
                        "index": 1
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
                "repeatableBttnName": "Add Skill",
                "fieldsetName": "skillsMain",
                "inputs": {
                    "skill":{
                        "type": "text",
                        "maxlength": "50",
                        "index": 1
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
                        "index": 1
                    },
                    "startDate":{
                        "type": "month",
                        "label": "Start Date(month):",
                        "index": 2
                    },
                    "endDate":{
                        "type": "month",
                        "Label": "End Date(month):",
                        "index": 3
                    },
                    "companyPhone": {
                        "type": "tel",
                        "pattern": "[0-9]{3}-[0-9]{3}-[0-9]{4}",
                        "placeholder": "123-456-7890",
                        "label": "Company Phone:",
                        "index": 4
                    },
                    "companyAddress": {
                        "type": "text",
                        "label": "Address:",
                        "index": 5
                    },
                    "companyState": {
                        "type": "text",
                        "maxlength": "2",
                        "size": "2",
                        "label": "State",
                        "index": 6
                    },
                    "companyZip": {
                        "type": "number",
                        "maxlength": "5",
                        "label": "Zip Code",
                        "index": 7
                    },
                    "jobTitle": {
                        "type": "text",
                        "label": "Job Title:",
                        "index": 8
                    }
                }
            },
            "responsibilities": {
                "repeatable": True,
                "repeatableBttnName": "Add Responsibility",
                "fieldsetName": "responsibilities",
                "inputs": {
                    "responsibility": {
                        "type": "text",
                        "maxlength": "140",
                        "index": 1
                    }
                }
            }
        }
    },
    "references":{
        "type": "section",
        "sectionName": "References",
        "repeatable": False,
        "fieldsets":{
            "main":{
                "repeatable": False,
                "fieldsetName": "skillsMain",
                "inputs": {
                    "firstname": {
                        "type": "text",
                        "label": "First Name:",
                        "index": 1
                    },
                    "lastName": {
                        "type": "text",
                        "label": "Last Name:",
                        "index": 2
                    },
                    "phone": {
                        "type": "tel",
                        "pattern": "[0-9]{3}-[0-9]{3}-[0-9]{4}",
                        "placeholder": "123-456-7890",
                        "label": "Phone:",
                        "index": 3
                    },
                    "email": {
                        "type": "email",
                        "label": "Email:",
                        "index": 4
                    },
                    "relationship": {
                        "type": "text",
                        "label": "Relationship:",
                        "index": 5
                    },
                    "knownFor": {
                        "type": "number",
                        "label": "Known For: (years)",
                        "maxlength": "3",
                        "index": 6
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
                        "index": 1
                    },
                    "description": {
                        "type": "textarea",
                        "rows": "2",
                        "placeholder": "A brief description.",
                        "index": 2
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
                        "index": 1
                    },
                    "phone":{
                        "type": "tel",
                        "pattern": "[0-9]{3}-[0-9]{3}-[0-9]{4}",
                        "placeholder": "123-456-7890",
                        "label": "Phone:",
                        "index": 2
                    },
                    "email":{
                        "type": "email",
                        "label": "Org Email:",
                        "index": 3
                    }
                }
            },
            "contributions": {
                "repeatable": True,
                "repeatableBttnName": "Add Contribution",
                "fieldsetName":"volunteeringContributions",
                "inputs": {
                    "contribution": {
                        "type": "text",
                        "placeholder": "contribution",
                        "index": 1
                    }
                }
            }
        }
    }
}


async function addSection(section){
    let response = await fetch('getsections/')
    let jsonData = await response.json()

    let component = jsonData[section]
    let assembler = document.getElementById("assembler")
    let sectionName = component['sectionName']
    let fieldsets = Object.entries(component['fieldsets'])

    addSectionContainer(section, assembler)
    let container = document.getElementById(section)
    
    addSectionBttn(sectionName, container)
    addInputs(fieldsets, container)
    addRepeatBttn(component, container)
    
};

let addSectionContainer =(sectionID, parent) => {
    secContainer = document.createElement("section")
    secContainer.id = sectionID
    parent.appendChild(secContainer)
};

let addSectionBttn = (sectionName, parent) => {
    titleBttn = document.createElement("button")
    titleBttn.className = "sectionBttn"
    titleBttn.innerHTML = sectionName
    parent.appendChild(titleBttn)
};

let addRepeatBttn = (repeatGroup, parent) => {
    if (repeatGroup['repeatable'] == true) {
        let repeatBttn = document.createElement("button")
        repeatBttn.innerHTML = component['repeatBttnName']
        parent.appendChild(repeatBttn)
    }
}

let addInputs = (fieldsets, parent) => {
    fieldsets.forEach((item)=> {
        let fieldset = document.createElement("fieldset")

        fieldset.id = item[1]['fieldsetName']
        fieldset.className = "sectionFieldset"
        parent.appendChild(fieldset)

        let inputs = Object.entries(item[1]['inputs'])

        inputs.forEach((item) => {
            properties = Object.entries(item[1])
            field = document.createElement("input")
            id = item[0]
            
            properties.forEach((item) => {
                if (item[0] == "label"){
                    label = document.createElement("label")
                    label.setAttribute("for", id)
                    label.innerHTML = item[1]
                    fieldset.appendChild(label)
                } else {
                    field.setAttribute(item[0], item[1])
                }
                
            })

            field.id = id
            fieldset.appendChild(field)
        })
    })
    };


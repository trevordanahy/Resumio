
async function addSection(sectionID){
    let response = await fetch('getsections/')
    let jsonData = await response.json()

    let component = jsonData[sectionID]
    console.log(component)
    let assembler = document.getElementById("assembler")
    let sectionName = component['sectionName']
    let fieldsets = Object.entries(component['fieldsets'])

    addSectionBlock(sectionID, assembler)
    let container = document.getElementById(sectionID + 'Container')
    let section = document.getElementById(sectionID)
    
    addSectionBttn(sectionName, container)
    addInputs(fieldsets, section)
    fieldsets.forEach(fieldset => addRepeatBttn(fieldset[1], fieldset[1]['fieldsetName']))
    addRepeatBttn(component, section.id)
    
};

let addSectionBlock =(sectionID, parent) => {
    let container = document.createElement("div")
    let section = document.createElement("section")
    let deleteDiv = document.createElement("div")
    let deleteBttn = document.createElement("button")

    container.id = sectionID + "Container"
    container.className = "sectionContainer"
    section.id = sectionID
    deleteDiv.className = "sectionDelete"
    deleteBttn.innerHTML = "X"
    deleteBttn.type = "button"
    deleteBttn.onclick = () => deleteBttn.parentElement.parentElement.remove()

    parent.appendChild(container)
    container.appendChild(section)
    deleteDiv.appendChild(deleteBttn)
    container.appendChild(deleteDiv)
    
};

let deleteSection = function(){
    del = () => console.log(this)
}

let addSectionBttn = (sectionName, container) => {
    titleBttn = document.createElement("button")
    titleBttn.className = "sectionBttn"
    titleBttn.innerHTML = sectionName
    container.prepend(titleBttn)
};

let repeatParent = (parent) => {
    let children = Array.from(parent.children)
    let bttn = children[children.length -1]

    if (parent.nodeName == "SECTION"){
        children.forEach((child) => {
            if (child.nodeName != "BUTTON" && child.classList.contains("original")){
                childCopy = child.cloneNode(true)
                childCopy.className = "sectionFieldset"
                parent.insertBefore(childCopy, bttn)
            }
        })
    } else if (parent.nodeName == "FIELDSET"){
        children.forEach((child) => {
            if (child.nodeName != "BUTTON" && child.classList.contains("original")){
                childCopy = child.cloneNode(true)
                childCopy.className = ""
                childCopy.value = ""
                parent.insertBefore(childCopy, bttn)
            }
        })
    }
};

let addRepeatBttn = (repeatGroup, parentID) => {
    if (repeatGroup['repeatable'] == true) {
        let repeatBttn = document.createElement("button")
        let parent = document.getElementById(parentID)
        repeatBttn.innerHTML = repeatGroup['repeatBttnName']
        repeatBttn.type = "button"
        repeatBttn.onclick = () => repeatParent(parent)
        parent.appendChild(repeatBttn)
    }
}

let addInputs = (fieldsets, parent) => {
    fieldsets.forEach((item)=> {
        let fieldset = document.createElement("fieldset")

        fieldset.id = item[1]['fieldsetName']
        fieldset.className = "sectionFieldset original"
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


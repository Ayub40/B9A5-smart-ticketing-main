/* get inner text value with number type of */
function getInnerTextValueFromId(elementId) {
    const element = document.getElementById(elementId)
    const elementValue = parseInt(element.innerText)
    return elementValue
}

/* get inner text from id */
function getInnerTextFromId(elementId) {
    const element = document.getElementById(elementId)
    const elementText = element.innerText
    return elementText
}
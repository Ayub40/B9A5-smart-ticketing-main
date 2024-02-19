/* get inner text value with number type of */
function getInnerTextValueFromId(elementId) {
    const element = document.getElementById(elementId)
    const elementValue = parseInt(element.innerText)
    return elementValue
}
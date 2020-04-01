
// Create StepanError class to define all framework errors
class StepanError {
  constructor(message) {
    this.name = 'StepanError';
    this.message = message;
  }
}



export default class Stepan {
  static isValidTagName(tagname) {
    let result;
    try {
      result = document.createElement(tagname).toString() !== "[object HTMLUnknownElement]";
      return result;
    } catch (e) {
      result = false;
      return result
    }
  }


  static createElement(element, parent, attributes = {}) {

    // check if this is a valid tag name
    if (!this.isValidTagName(element)) {
      throw new StepanError('StepanError: Invalid tag name');
    }

    const newElement = document.createElement(element);
    const { innerHTML, innerText } = attributes;

    for (let attribute in attributes) {
      if (['innerHTML', 'innerText'].includes(attribute)) {
        continue;
      }

      newElement.setAttribute(attribute, attributes[attribute]);
    }

    innerHTML && (newElement.innerHTML = innerHTML);
    innerText && (newElement.innerText = innerText);
    parent.appendChild(newElement);
    return newElement;
  }
}

Stepan.StepanError = StepanError;

Stepan.Component = class {
  constructor(parent) {
    // throw an error if parent is null or undefined, or if it's not a valid DOM object
    if (parent === null || parent === undefined || !(parent instanceof Element)) {
      //console.log(parent.toString())
      throw new StepanError('StepanError: Invalid parent object')
    }
    else {
      this.parent = parent;
    }
  }

  // TODO (Bonus): Ensure that every component returns a top-level root element
};
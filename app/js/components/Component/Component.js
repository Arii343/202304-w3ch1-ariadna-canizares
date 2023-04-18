class Component {
  element;

  constructor(parentElement, tagName) {
    this.element = this.createElement(tagName);
    parentElement.appendChild(this.element);
  }
}

export default Component;

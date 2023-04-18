import Component from "../Component/Component.js";

class ListItem extends Component {
  constructor(parentElement, className) {
    super(parentElement, "li", className);
  }
}

export default ListItem;

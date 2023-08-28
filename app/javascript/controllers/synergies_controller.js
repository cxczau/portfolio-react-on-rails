import { Controller } from "stimulus";
import React from "react";
import ReactDOM from "react-dom";

import SynergiesApp from "../bundles/synergies/App";

export default class extends Controller {
  connect(props) {
    console.log(this.data.get("synergies"));
    console.log(this.data);
    // console.log(props);
    ReactDOM.render(<SynergiesApp />, this.element);
  }

  disconnect() {
    ReactDOM.unmountComponentAtNode(this.element);
  }
}

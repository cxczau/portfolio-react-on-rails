import { Controller } from "stimulus";
import React from "react";
import ReactDOM from "react-dom";

import HealthApp from "../bundles/health/App";

export default class extends Controller {
  connect() {
    ReactDOM.render(<HealthApp />, this.element);
  }

  disconnect() {
    ReactDOM.unmountComponentAtNode(this.element);
  }
}

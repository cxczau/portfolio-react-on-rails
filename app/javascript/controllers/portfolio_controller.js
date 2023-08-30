import { Controller } from "stimulus";
import React from "react";
import ReactDOM from "react-dom";

import PortfolioApp from "../bundles/portfolio/App";

export default class extends Controller {
  connect() {
    ReactDOM.render(<PortfolioApp />, this.element);
  }

  disconnect() {
    ReactDOM.unmountComponentAtNode(this.element);
  }
}

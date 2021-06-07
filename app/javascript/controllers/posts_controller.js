import { Controller } from "stimulus";
import React from "react";
import ReactDOM from "react-dom";

import PostsApp from "../bundles/posts/App";

export default class extends Controller {
  connect() {
    ReactDOM.render(<PostsApp />, this.element);
  }

  disconnect() {
    ReactDOM.unmountComponentAtNode(this.element);
  }
}

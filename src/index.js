import React from "react";
import ReactDOM from "react-DOM";
import { Router, Route, browserHistory } from "react-router";

import store from "./store";
import { Provider } from "react-redux";
import App from "./components/app";

document.addEventListener( "DOMContentLoaded", () => {
  const reactNode = document.getElementById("react-node");

  if(reactNode) {

    ReactDOM.render(
      <Provider store={ store }>
        <Router history={ browserHistory }>
          <Route path="/" component={ App }>
          </Route>
        </Router>
      </Provider>
      , reactNode);

  }
});

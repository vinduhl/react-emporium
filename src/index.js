import React from "react";
import ReactDOM from "react-DOM";
import { Router, Route, browserHistory } from "react-router";

import store from "./store";
import { Provider } from "react-redux";
import App from "./components/App/App";
import Login from "./components/Login/Login"
import Shop from "./components/Shop/Shop";

document.addEventListener( "DOMContentLoaded", () => {
  const reactNode = document.getElementById("react-node");

  if(reactNode) {

    ReactDOM.render(
      <Provider store={ store }>
        <Router history={ browserHistory }>
          <Route path="/" component={ App }>
            <Route path="login" component={ Login } />
            <Route path="shop" component={ Shop } />
          </Route>
        </Router>
      </Provider>
      , reactNode);

  }
});

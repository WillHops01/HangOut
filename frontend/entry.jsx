import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import Greeting from "./components/greeting";
import configureStore from "./store/store";

const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={Greeting} />
    </HashRouter>
  </Provider>
);

document.addEventListener("DOMContentLoaded", ()=>{
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
})
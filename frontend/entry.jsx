import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import Greeting from "./components/greeting";
import configureStore from "./store/store";

//testing
//import { login, logout } from "./util/session_api_util";
import { login } from "./actions/session_actions";

const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <Greeting />
    </HashRouter>
  </Provider>
);

document.addEventListener("DOMContentLoaded", ()=>{
  const root = document.getElementById("root");
  const store = configureStore();
  //TESTING
  window.login = login;
  //window.logout = logout;
  window.store = store;

  //END TESTING
  ReactDOM.render(<Root store={store} />, root);
})

//const user1 = {username: "Will", password: "hunter2"}
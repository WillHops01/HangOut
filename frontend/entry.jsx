import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import App from "./components/app";
import configureStore from "./store/store";
import { fetchGroups, fetchOneGroup, createMemberThunk } from "./actions/group_actions";



//testing
//import { login, logout } from "./util/session_api_util";
import { login, logout } from "./actions/session_actions";
import { changeDropdownState } from "./actions/ui_actions";

const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

document.addEventListener("DOMContentLoaded", ()=>{
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  //TESTING
  window.login = login;
  window.logout = logout;
  window.store = store;
  window.dispatch = store.dispatch;
  window.changeDropdownState = changeDropdownState;
  window.fetchOneGroup = fetchOneGroup;
  window.createMemberThunk = createMemberThunk;


  //END TESTING
 
  ReactDOM.render(<Root store={store} />, root);
})

// const user1 = {username: "Will", password: "hunter2"}
// this.store.dispatch(login(user1))
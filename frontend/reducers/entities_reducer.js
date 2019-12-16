import { combineReducers } from 'redux';

import users from './users_reducer';
import groups from "./groups_reducer";

export default combineReducers({ 
  users,
  groups
});
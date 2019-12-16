import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { GET_ALL_GROUPS } from '../actions/group_actions';

const GroupsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    // case RECEIVE_CURRENT_USER:
    //   let newState = action.currentUser.groups;
    //   return Object.assign({},)
    case GET_ALL_GROUPS:      
      return Object.assign({}, action.groups); 
    default:
      return state;
  }
};

export default GroupsReducer;
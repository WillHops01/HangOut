import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { GET_ALL_GROUPS, RECEIVE_ONE_GROUP, RECEIVE_NEW_MEMBER } from '../actions/group_actions';

const GroupsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    // case RECEIVE_CURRENT_USER:
    //   //let newState = Object.assign({},state);     
    //   newState.current_user_groups = action.currentUser.current_user_groups;
    //   return newState;
    case GET_ALL_GROUPS:      
      return Object.assign({}, action.groups);
    case RECEIVE_ONE_GROUP: 
      let nextState = Object.assign({},newState, { [action.group.id]:action.group });     
      return nextState;
    // case RECEIVE_NEW_MEMBER:      
    //   newState.current_user_groups = action.membership;
    //   return newState;
    default:
      return state;
  }
};

export default GroupsReducer;
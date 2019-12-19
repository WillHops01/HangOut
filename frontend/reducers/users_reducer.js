import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_NEW_MEMBER } from "../actions/group_actions";
//import { RECEIVE_REVIEW, RECEIVE_BENCH } from '../actions/bench_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_NEW_MEMBER:      
      let newState = state;
      debugger;
      newState[action.membership.id].current_user_groups = action.membership.current_user_groups;
      debugger;
      return newState;
    default:
      return state;
  }
};

export default usersReducer;

import { getGroups, getOneGroup, createGroup, createMember } from "../util/groups_util";


export const GET_ALL_GROUPS = "GET_ALL_GROUPS";
export const RECEIVE_ONE_GROUP = "RECEIVE_ONE_GROUP";
export const RECEIVE_NEW_MEMBER = "RECEIVE_NEW_MEMBER";


export const fetchGroups = () => dispatch =>{  
  getGroups().then(groups => (
    dispatch(receiveGroups(groups))
  ));
};

export const createGroupThunk = (group) => dispatch => {
  createGroup(group).then(group => dispatch(receiveOneGroup(group)));
};

export const fetchOneGroup = (groupId) => dispatch =>{  
  getOneGroup(groupId).then(group => dispatch(receiveOneGroup(group)));
};

//import session action current user, dispatch multiple actions?

export const createMemberThunk = (member) => dispatch => {
  createMember(member).then(payload => {    
    dispatch(receiveOneGroup(payload));
    dispatch(receiveNewMembership(payload.current_user_groups));
  })
}

export const receiveNewMembership = membership => {
  debugger
  return({
    type: RECEIVE_NEW_MEMBER,
    membership
  })
}

export const receiveGroups = groups => ({
  type: GET_ALL_GROUPS,
  groups
});

export const receiveOneGroup = ({group}) => {    
  return({
  type: RECEIVE_ONE_GROUP,
  group
});
};




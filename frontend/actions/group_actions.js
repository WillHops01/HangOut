import { getGroups, getOneGroup, createGroup } from "../util/groups_util";


export const GET_ALL_GROUPS = "GET_ALL_GROUPS";
export const RECEIVE_ONE_GROUP = "RECEIVE_ONE_GROUP";


export const fetchGroups = () => dispatch =>{
  debugger;
  getGroups().then(groups => (
    dispatch(receiveGroups(groups))
  ));
};

export const createGroupThunk = (group) => dispatch => {
  createGroup(group).then(group => dispatch(receiveOneGroup(group)));
};

export const fetchOneGroup = (groupId) => dispatch =>{
  debugger;
  getOneGroup(groupId).then(group => dispatch(receiveOneGroup(group)));
};

export const receiveGroups = groups => ({
  type: GET_ALL_GROUPS,
  groups
});

export const receiveOneGroup = group => {
  debugger;
  return({
  type: RECEIVE_ONE_GROUP,
  group
});
};


import { getGroups, getOneGroup } from "../util/groups_util";


export const GET_ALL_GROUPS = "GET_ALL_GROUPS";
export const RECEIVE_ONE_GROUP = "RECEIVE_ONE_GROUP";

export const fetchGroups = () => dispatch =>{
  getGroups().then(groups => (
    dispatch(receiveGroups(groups))
  ));
};

export const fetchOneGroup = (groupId) => dispatch =>{
  getOneGroup(groupId).then(group => dispatch(receiveOneGroup(group)));
};

export const receiveGroups = groups => ({
  type: GET_ALL_GROUPS,
  groups
});

export const receiveOneGroup = group => ({
  type: RECEIVE_ONE_GROUP,
  group
});


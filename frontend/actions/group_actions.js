import { getGroups } from "../util/groups_util";


export const GET_ALL_GROUPS = "GET_ALL_GROUPS";

export const fetchGroups = () => dispatch =>{
  getGroups().then(groups => (
    dispatch(receiveGroups(groups))
  ));
};

export const receiveGroups = groups => ({
  type: GET_ALL_GROUPS,
  groups
});


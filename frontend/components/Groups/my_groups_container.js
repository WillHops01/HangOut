import { connect } from "react-redux";
import MyGroups from "./my_groups";
import { groupToArray } from "../../util/util";

const msp = (currentUser, groups) => {
  debugger;
  const groupIds = groupToArray(currentUser.groups);
  return{
    groupIds,
    groups
  };
};

export default connect(msp)(MyGroups);
import { connect } from "react-redux";
import MyGroups from "./my_groups";

const msp = (mygroups) => (
  mygroups
);

export default connect(msp)(MyGroups)
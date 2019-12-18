import { connect } from "react-redux";
import FindComponent from "./find_header_component";
import { fetchGroups } from "../../actions/group_actions";

const msp = (props) => ({
  //NOTE: might need to request fresh group information from server here
  groups: props.entities.groups
});



export default connect(msp)(FindComponent);


import { connect } from "react-redux";
import FindComponent from "./find_header_component";
import { fetchGroups } from "../../actions/group_actions";

const msp = (props) => ({
  //NOTE: might need to request fresh group information from server here
  groups: props.entities.groups
});

const mdp = dispatch => {
  return({
    fetchGroups: () => dispatch(fetchGroups())
  })
}



export default connect(msp, mdp)(FindComponent);


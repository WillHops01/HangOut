import { connect } from "react-redux";
import FindComponent from "./find_component";

const msp = (props) => ({
  groups: props.entities.groups
});

// const mdp = dispatch => (

// );

export default connect(msp)(FindComponent);


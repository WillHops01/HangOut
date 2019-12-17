import { connect } from "react-redux";
import ShowGroup from "./show_group_component";

const msp = (state, ownProps) => {  
  return({
    group: state.entities.groups[ownProps.match.params.groupId]
  });
};

export default connect(msp)(ShowGroup);
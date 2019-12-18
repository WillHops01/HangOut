import { connect } from "react-redux";
import ShowGroupHead from "./group_show_head_component";
import { fetchOneGroup } from "../../actions/group_actions";


const msp = (state, ownProps) => {  
  return({
    group: state.entities.groups[ownProps.match.params.groupId]
  });
};

const mdp = dispatch => {
  return{
    fetchOneGroup: id => dispatch(fetchOneGroup(id))
  };
};



export default connect(msp, mdp)(ShowGroupHead);
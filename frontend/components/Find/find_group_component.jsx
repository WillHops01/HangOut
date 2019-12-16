import React from "react";
import { connect } from "react-redux";
import { fetchGroups } from "../../actions/group_actions";

//import { groupToArray } from "../../util/util";

class FindGroupComponent extends React.Component{
  constructor(props){
    super(props);
    this.buildMyGroups = this.buildMyGroups.bind(this);
  }

  // fetchMyGroups(){
    
  // }

  buildMyGroups(){
    // const myGroupDiv = this.props.current_user_groups.map((id, idx) => {

    // })

    
  }

  render(){
    if (!this.props.groups.current_user_groups){
      fetchGroups();
      return null;
    } else {
      return (
        <div id="find-groups-main-container">
          <div id="find-my-groups-container">

          </div>

        </div>
      )
    }
    
  }
}

const msp = ({entities}) => {  
  return({
    groups: entities.groups
  })
}


export default connect(msp, null)(FindGroupComponent);
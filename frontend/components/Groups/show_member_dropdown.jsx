import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class ShowMembershipDropdown extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      selected: "dropdown-NOT-selected"
    }
    this.renderMember = this.renderMember.bind(this);
    const group = this.props.group;
  }

  renderMember(){
    if (this.state.selected === "dropdown-NOT-selected") {
      return (
        <button id="show-member-dropdown">

        </button>
      )
    } else {
      return (
        <div>
          <ul>
            <li></li>
          </ul>
        </div>
      )
    }
  }

  render(){
    // if (this.group.member_list.includes())    
    return(
      null
    )
    
  }
}

const msp = (state, ownProps) => {    
  return({
    group: state.entities.groups[ownProps.match.params.groupId],
    current_user_id: state.session.id
  })  
}
export default connect(msp)(ShowMembershipDropdown);
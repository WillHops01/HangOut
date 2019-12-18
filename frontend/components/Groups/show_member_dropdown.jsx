import React from "react";
import { connect } from "react-redux";

class ShowMembershipDropdown extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      selected: "dropdown-NOT-selected"
    }
    this.renderMember = this.renderMember.bind(this);
    this.group = this.props.group;
  }

  renderMember(){
    if (this.state.selected === "dropdown-NOT-selected") {
      return (
        <button id="show-member-dropdown">
          <span>
            You're a member
          </span>
        </button>
      )
    } else {
      return (
        <div>
          <ul>
            <li>teste</li>
          </ul>
        </div>
      )
    }
  }

  render(){    
    if (this.group.member_list.includes(this.props.current_user_id)){
      //current user is member
      return (
        this.renderMember()
      )
    } else {      
      return null;
    }
  }
}

const msp = (state, ownProps) => {    
  return({
    group: state.entities.groups[ownProps.match.params.groupId],
    current_user_id: state.session.id
  })  
}
export default connect(msp)(ShowMembershipDropdown);
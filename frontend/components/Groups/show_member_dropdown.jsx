import React from "react";
import { connect } from "react-redux";

class ShowMembershipDropdown extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      selected: "dropdown-hidden"
    }
    this.renderMember = this.renderMember.bind(this);    
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown(){    
    if (this.state.selected === "dropdown-hidden"){
      this.setState({selected: "dropdown-shown"})
    } else {
      this.setState({ selected: "dropdown-hidden"})
    }
  }

  renderMember(){

    return(
      <div id="member-dropdown-outer-container">
        <button id="member-dropdown-button"
                onClick={()=>this.toggleDropdown()}>
          <div id="member-dropdown-inner">
            You're a member
          </div>
        </button>

        <div className={this.state.selected}> 
          <div>
            test
          </div>
          <div>
            other test
          </div>
          Shown
        </div>
      </div>
      
    )
  }

  render(){    
    const group = this.props.group;
    if (group.member_list.includes(this.props.current_user_id)){
      //current user is member
      return (
        this.renderMember()
      )
    } else {      
      return (
        <div>
          Join this Group
        </div>        
      )
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
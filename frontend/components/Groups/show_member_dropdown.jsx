import React from "react";
import { connect } from "react-redux";
import { createMemberThunk, destroyMemberThunk } from "../../actions/group_actions";

class ShowMembershipDropdown extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      selected: "dropdown-hidden"
    }
    this.renderMember = this.renderMember.bind(this);    
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.changeMembership = this.changeMembership.bind(this);
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
                tabIndex="0"
                onBlur={() => this.toggleDropdown()}
                onFocus={() => this.toggleDropdown()}>
          <div className="member-dropdown-inner already-member">
            You're a member
          </div>
        </button>
        <div className={this.state.selected}> 
          <ul id="member-dropdown-list">
            <li className="member-dropdown-list-item">
              <button className="member-dropdown-list-button"
                      onMouseDown={()=>this.changeMembership("delete")}>
                Leave this group
              </button>
            </li>
          </ul>
        </div>

      </div>      
    )
  }

  changeMembership(method){
    let member = {
      userid: this.props.current_user_id,
      groupid: this.props.group.id
    }
    if (method==="create"){
      this.props.createMemberThunk(member)
    } else {
      this.props.destroyMemberThunk(member)
    }    
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
        <button id="member-dropdown-button"
          onClick={() => this.changeMembership("create")}>
          <div className="member-dropdown-inner join-group">
            Join this group
          </div>
        </button>      
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

const mdp = dispatch => {
  return({
    createMemberThunk: member => dispatch(createMemberThunk(member)),
    destroyMemberThunk: member => dispatch(destroyMemberThunk(member)),
  })
}
export default connect(msp, mdp)(ShowMembershipDropdown);
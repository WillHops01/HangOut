import React from "react";
import { connect } from "react-redux";
import { fetchGroups } from "../../actions/group_actions";

class FindGroupComponent extends React.Component{
  constructor(props){
    super(props);
    let myGroups = {};
    this.buildMyGroups = this.buildMyGroups.bind(this);    
  }

  componentDidMount(){
    fetchGroups();
  }

  buildMyGroups(){

    let groupArray = [];
    let subArray = [];
    //TODO: CLEAN UP THIS LOGIC
    for (let i = 0; i < this.myGroups.length; i++){
      if ( i === this.myGroups.length - 1){
        if ( i % 3 === 0){
          groupArray.push(<div key={i+1} className="my-groups-row">
            {subArray}</div>)
          subArray = [];
        }
        subArray.push(i);
        groupArray.push(<div key={i} className="my-groups-row">
          {subArray}</div>)
        break;
      } else if ( i % 3 === 0 && i !== 0){
        groupArray.push(<div key={i} className="my-groups-row">
          {subArray}</div>)
        subArray = [i];
      } else {
        subArray.push(i);
      }     
    }
    
    return(   
      <div id="my-groups-wrapper">
        {groupArray}
      </div> 
    )
  }

  render(){    
    this.myGroups = this.props.groups.current_user_groups;
    if (this.myGroups){
      return(
        <div id="my-groups-container">
          {this.buildMyGroups()}
          groups built
        </div>
      )
    } else {
      return null;
    }    
  }
}

const msp = ({entities}) => {  
  return({
    groups: entities.groups
  })
}


export default connect(msp, null)(FindGroupComponent);
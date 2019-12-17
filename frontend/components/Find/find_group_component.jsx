import React from "react";
import { connect } from "react-redux";
import { fetchGroups } from "../../actions/group_actions";

//import { groupToArray } from "../../util/util";

class FindGroupComponent extends React.Component{
  constructor(props){
    super(props);
    let myGroups = {};
    this.buildMyGroups = this.buildMyGroups.bind(this);
    //const groupArray = [];
  }

  // fetchMyGroups(){
    
  // }

  componentDidMount(){
    fetchGroups();
    
    // this.buildMyGroups();
  }

  buildMyGroups(){

    let groupArray = [];
    let subArray = [];

  
    for (let i = 0; i < this.myGroups.length; i++){
      if ( i === this.myGroups.length - 1){
        subArray.push(i);
        groupArray.push(<div key={i}>
          {subArray}</div>)
        break;
      } else if ( i % 3 === 0 && i !== 0){
        groupArray.push(<div key={i}>
          {subArray}</div>)
        subArray = [i];
      } else {
        subArray.push(i);
      }     
    }
    debugger
    return(   
      <div>
        {groupArray}
      </div>   
      
    )
  }

  render(){
    // if (!myGroups){
    //   fetchGroups();
    //   return null;
    // } else {
    //   return (
    //     <div id="find-groups-main-container">
    //       <div id="find-my-groups-container">
    //         {}
    //       </div>
          

    //     </div>
    //   )
    // }
    this.myGroups = this.props.groups.current_user_groups;
    if (this.myGroups){
      return(
        <div>
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
import React from "react";
import { connect } from "react-redux";
import { fetchGroups } from "../../actions/group_actions";

//import { groupToArray } from "../../util/util";

class FindGroupComponent extends React.Component{
  constructor(props){
    super(props);
    let myGroups;
    this.buildMyGroups = this.buildMyGroups.bind(this);
    const groupArray = [];
  }

  // fetchMyGroups(){
    
  // }

  componentDidMount(){
    // myGroups = this.props.groups.current_user_groups;
    // this.buildMyGroups();
    // debugger;
  }

  buildMyGroups(){
    // const myGroupDiv = this.props.current_user_groups.map((id, idx) => {

    // })
    //let numTimes = Math.ceil(myGroups.length / 3);


    //let groupArray = [];
    let subArray = [];
    for (let i = 0; i < myGroups.length; i++){
      if (i % 3 === 0 && i != 0){
      groupArray.push(<div>{subArray}</div>)
        subArray = [];
      }
      subArray.push(i);

    }

    return(
      <div>
        { groupArray }
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
    return null;
  }
}

const msp = ({entities}) => {  
  return({
    groups: entities.groups
  })
}


export default connect(msp, null)(FindGroupComponent);
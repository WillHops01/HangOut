import React from "react";
import { connect } from "react-redux";
import { fetchGroups } from "../../actions/group_actions";

class MyGroupComponent extends React.Component{
  constructor(props){
    super(props);
    let myGroups = {};
    this.buildMyGroups = this.buildMyGroups.bind(this);    
    this.buildMyGroupElement = this.buildMyGroupElement.bind(this);
  }

  buildMyGroupElement(i){
    let index = this.myGroups[i];    
    let group = this.props.groups[index];

    // backgroundImage: url(group.image_link)
    //debugger;
    const divStyle = {
      background: `url(${group.image_link})`,
      backgroundSize: `220px 180px`
    };
    
    return(
      <div className="mygroup-row-element-container" 
            key={group.id}
            style={divStyle}>
        <div className="mygroup-element-title">
          {group.name}
        </div>        
      </div>
    )
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
        subArray.push(this.buildMyGroupElement(i));
        groupArray.push(<div key={i} className="my-groups-row">
          {subArray}</div>)
        break;
      } else if ( i % 3 === 0 && i !== 0){
        groupArray.push(<div key={i} className="my-groups-row">
          {subArray}</div>)
        subArray = [this.buildMyGroupElement(i)];
      } else {
        subArray.push(this.buildMyGroupElement(i));
      }     
    }
    
    return(   
      <div id="my-groups-wrapper">
        <h4 className="my-groups-header">
          YOUR GROUPS
        </h4>
        {groupArray}
      </div> 
    )
  }

  componentDidMount() {
    if (!this.props.groups) {
      this.fetchGroups();
    } 
  }

  render(){    
    this.myGroups = this.props.groups.current_user_groups;
    if (this.myGroups){      
      return(
        <div id="my-groups-container">
          {this.buildMyGroups()}          
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




export default connect(msp, null)(MyGroupComponent);
import React from "react";
import { connect } from "react-redux";
import { fetchGroups } from "../../actions/group_actions";

class SuggestedGroups extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if(!this.props.groups){
      this.fetchGroups();
    }
  }


  render(){
    return null;
  }
}

const msp = ({entities}) => ({
  groups: entities.groups
});

export default connect(msp)(SuggestedGroups);
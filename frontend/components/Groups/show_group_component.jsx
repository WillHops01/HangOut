import React from "react";
import { fetchOneGroup } from "../../actions/group_actions";

class ShowGroup extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if (!this.props.group){
      fetchOneGroup(this.props.match.params.groupId);
    }
  }

  render(){    
    return null;
  }
  
}

export default ShowGroup;
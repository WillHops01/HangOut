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
    const group = this.props.group;
    if (group){
      return(
        <div id="group-show-page">
          <div id="group-show-head-container">
            <section id="group-show-head">
              <img src={group.image_link} />
              <div id="group-show-head-details">
                <div id="group-show-details-title">
                  {group.name}
                </div>
                <div>
                  {group.description}
                </div>
              </div>
            </section>

          </div>
          
        </div>
      )
    } else {
      return null;
    } 
    
  }
  
}

export default ShowGroup;
import React from "react";
import { connect } from "react-redux";
import { fetchGroups } from "../../actions/group_actions";
import { withRouter } from "react-router-dom";

class SuggestedGroups extends React.Component{
  constructor(props){
    super(props);
    const maxGroups = 12;
    //TODO: use to limit group index page
    this.loadSuggestedGroups = this.loadSuggestedGroups.bind(this);
  }

  loadSuggestedGroups(){
    //TODO: Put location logic here
    
    let userGroups = this.props.groups.current_user_groups;
    
    const suggestedGroupEles = Object.keys(this.props.groups).map((groupId, idx) => {
      let group = this.props.groups[groupId];
      if (!userGroups.includes(Number(groupId))){  
        //Fix state??
        if (groupId === "current_user_groups"){
          return null;
        }      
        return (
          <div className="suggested-group-element" key={idx}
              onClick={()=>{this.props.history.push(`/groups/${groupId}`)}}
                style={{
                  background: `url(${group.image_link})`,
                  backgroundSize: `310px 180px`
                }}>
            <div className="suggested-group-element-title">
              {this.props.groups[groupId].name}
            </div>            
          </div>
        )
      } 
    });

    return suggestedGroupEles;
  }

  componentDidMount(){
    // debugger;
    if(this.props.groups.length === 0){
      debugger;
      fetchGroups();
    }
  }

  render(){
    //const suggestedGroups = this.props.groups;    
    if (Object.keys(this.props.groups).length > 0 ){
      
      return(
        <div id="suggested-groups-main-container">
          <h4 className="my-groups-header">
            SUGGESTED GROUPS
          </h4>
          <div id="suggested-groups">
            {this.loadSuggestedGroups()}
          </div>
        </div>
      )
    } else {
      return null;
    }
    
  }
}

const msp = ({entities}) => ({
  groups: entities.groups
});

export default connect(msp)(withRouter(SuggestedGroups));
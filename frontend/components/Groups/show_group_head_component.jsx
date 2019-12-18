import React from "react";
import GroupShowBody from "./group_show_body_component";
import { fetchOneGroup } from "../../actions/group_actions";

class ShowGroupHead extends React.Component{
  constructor(props){
    super(props);
    debugger;
    this.fetchGroup = this.props.fetchOneGroup;
  }

  componentDidMount(){
    this.fetchGroup(this.props.match.params.groupId);  
    
    if (!this.props.group){
      this.fetchGroup(this.props.match.params.groupId);      
    }
  }

  render(){  
    
    const group = this.props.group;
    debugger
    if (group){
      return(
        <div id="group-show-page">

          <div id="group-show-head-container">
            <section id="group-show-head">
              <img id="group-show-head-img"
                src={group.image_link} />

              <div id="group-show-head-details">
                <div id="group-show-details-title">
                  {group.name}
                </div>

                <div className="group-show-icon-containers">
                  <img className="group-show-icons"
                    src="/Icons/placeholder.png" />
                  <div className="group-show-icon-text">
                    {/* PLACEHOLDER */}
                    New York, NY
                  </div>
                </div>

                <div className="group-show-icon-containers">
                  <img className="group-show-icons"
                    src="/Icons/group.png" />
                  <div className="group-show-icon-text">
                    Member Count
                  </div>
                </div>

                <div className="group-show-icon-containers">
                  <img className="group-show-icons"
                    src="/Icons/group.png" />
                  <div className="group-show-icon-text">
                    Organized by: 
                  </div>
                </div>                  
                
              </div>
            </section>
          </div> 
            {/* end of head container */}
          
          

          {/* START MAIN PAGE */}
          <GroupShowBody group={this.props.group}/>
        </div>
      )
    } else {
      return null;
    } 
    
  }
  
}

export default ShowGroupHead;
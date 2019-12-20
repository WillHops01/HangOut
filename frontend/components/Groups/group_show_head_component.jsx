import React from "react";
import GroupShowBody from "./group_show_body_component";
import { Route } from "react-router-dom";

class ShowGroupHead extends React.Component{
  constructor(props){
    super(props);    
    this.fetchGroup = this.props.fetchOneGroup;
  }

  componentDidMount(){      
    if (typeof this.props.group === "undefined" || !this.props.group.hasOwnProperty("user_details")){   
      this.fetchGroup(this.props.match.params.groupId);  
    }      
  }

  render(){  
    
    const group = this.props.group;    
    if (typeof group === "undefined"){
      return null;    
    } else {        
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
                    { group.member_count } members
                  </div>
                </div>

                <div className="group-show-icon-containers">
                  <img className="group-show-icons"
                    src="/Icons/avatar.png" />
                  <div className="group-show-icon-text">
                    Organized by{" "}
                    <h3 id="group-show-details-creator">
                      {group.creator.username}
                    </h3>
                  </div>
                </div>                  
                
              </div>
            </section>
          </div> 
            {/* end of head container */}
          
          

          {/* START MAIN PAGE */}
          <Route component={GroupShowBody}/>
          {/* <GroupShowBody group={this.props.group}/> */}
        </div>
      )
    }     
  }
  
}

export default ShowGroupHead;
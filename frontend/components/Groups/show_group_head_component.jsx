import React from "react";
import GroupShowBody from "./group_show_body_component";

class ShowGroupHead extends React.Component{
  constructor(props){
    super(props);    
    this.fetchGroup = this.props.fetchOneGroup;
  }

  componentDidMount(){  
    if (typeof this.props.group === "undefined" || typeof this.props.group.member_count === "undefined") {
      this.fetchGroup(this.props.match.params.groupId);  
    }      
  }

  render(){  
    
    const group = this.props.group;
    if (typeof group === "undefined" || typeof group.member_count === "undefined"){
      return null;    
    }
      // } else if (typeof group.member_count === "undefined"){
      //   return null;
      // }
    else {        
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
    }     
  }
  
}

export default ShowGroupHead;
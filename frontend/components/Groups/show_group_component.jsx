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
          
        </div>
      )
    } else {
      return null;
    } 
    
  }
  
}

export default ShowGroup;
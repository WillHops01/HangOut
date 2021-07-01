import React from "react";
import { connect } from "react-redux";

class GroupShowAbout extends React.Component{    
  constructor(props){
    super(props)
    this.buildPictures = this.buildPictures.bind(this);
  }
  
  buildPictures(){    
    let picEles = this.props.group.user_details.map((user, idx) => {
      return(
        <img src={user.profile_image_link}
              key={idx}
              className="about-profile-images"/>
      )
    })
    return(
      <div id="about-members-picture-container">
        { picEles }
      </div>
    )
  }

  render(){
    let group = this.props.group
    if (group.hasOwnProperty("user_details")) {
      return (
        <div id="group-show-about-main">

          <section id="group-show-about-left"
            className="group-show-about-half">

            <div id="groupshow-description-container">
              <span className="about-title">
                What we're about
          </span>
              <span id="groupshow-description">
                {group.description}
          </span>
            </div>
          </section>

          <section id="group-show-about-right"
            className="group-show-about-half">
            <div id="groupshow-creator-container">
              <span className="about-title">
                Organizer
          </span>
              <div id="about-creator-details-container">
                <img src={group.creator.profile_image_link}
                  className="about-profile-images" />
                <div id="about-creator-name">
                  {group.creator.username}
                </div>
              </div>
            </div>

            <div id="about-members-container">
              <div id="about-members-title">
                Members ({group.member_count})
          </div>
              {this.buildPictures()}
            </div>

          </section>
        </div>
      )
    } else {
      return null;
    }
  }
  
  
  
};

const msp = ({ entities }, ownProps) => {  
  return ({
    group: entities.groups[ownProps.match.params.groupId],
    users: entities.users
  })
}

export default connect(msp)(GroupShowAbout);
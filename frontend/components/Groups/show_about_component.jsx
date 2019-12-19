import React from "react";
//import { connect } from "react-redux";

const GroupShowAbout = ({group}) => {  

  const buildPictures = () => {    
    let picEles = group.user_details.map((user, idx) => {
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
  
  if (group.hasOwnProperty("user_details")){
    return (
      <div id="group-show-about-main">

        <section id="group-show-about-left"
          className="group-show-about-half">

          <div id="groupshow-description-container">
            <span className="about-title">
              What we're about
          </span>
            <span id="groupshow-description">
              {group.description} plus other really long strings string string
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
            {buildPictures()}
          </div>

        </section>
      </div>
    )
  } else {
    return null;
  }
  
};

export default GroupShowAbout;



// const msp = state => ({
//   group: 
// })
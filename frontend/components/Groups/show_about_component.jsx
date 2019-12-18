import React from "react";
//import { connect } from "react-redux";

const GroupShowAbout = ({group}) => {  

  return(
    <div id="group-show-about-main">

      <section id="group-show-about-left"
                className="group-show-about-half">
        <div id="groupshow-description-container">
          <span className="about-title">
            What we're about
          </span>
          <span id="groupshow-description">
            { group.description }
          </span>
        </div>
      </section>

      <section id="group-show-about-right"
                className="group-show-about-half">
        <div id="groupshow-creator-container">
          <span className="about-title">
            Organizer
          </span>
        </div>
      </section>
    </div>
  )
};

export default GroupShowAbout;



// const msp = state => ({
//   group: 
// })
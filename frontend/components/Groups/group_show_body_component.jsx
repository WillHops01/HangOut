import React from "react";

class GroupShowBody extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    return(
      <div id="group-show-body-container">      

        <section id="group-show-navigation">
          <div id="group-show-nav-container">
            <ul id="group-nav-clickables-ul">
              <li>
                <button className="group-nav-buttons">
                  About
                  </button>
              </li>
              <li>
                <button className="group-nav-buttons">
                  Events
                  </button>
              </li>
              <li>
                <button className="group-nav-buttons">
                  Members
                  </button>
              </li>
            </ul>
            <div id="group-nav-member-status">

            </div>
          </div>
        </section>


        <div id="group-show-body">
          <section className="group-show-body-section">
            Left
          </section>
          <section className="group-show-body-section">
            Right
          </section>
        </div>
      </div>
    )
  }
}

export default GroupShowBody;
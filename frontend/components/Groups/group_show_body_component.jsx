import React from "react";

class GroupShowBody extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      about: "selected",
      events: "unselected",
      members: "unselected",
    };
    this.renderNavBar = this.renderNavBar.bind(this);
    this.changeSelect = this.changeSelect.bind(this);
  }

  changeSelect(buttonTitle){
    let newState = {};
    Object.keys(this.state).forEach(key => {      
      if(key === buttonTitle){
        newState[key] = "selected";
      } else {
        newState[key] = "unselected";
      }
    });    
    this.setState(newState);    
  }

  renderNavBar(){
    return(
      <section id="group-show-navigation">
        <div id="group-show-nav-container">
          <ul id="group-nav-clickables-ul">
            <li className="group-nav-clickables-li">
              <button className={`${this.state.about} group-nav-buttons`}
                      onClick={() => this.changeSelect("about")}>
                About
              </button>
            </li>
            <li className="group-nav-clickables-li">
              <button className={`${this.state.events} group-nav-buttons`}
                      onClick={() => this.changeSelect("events")}>
                Events
              </button>
            </li>
            <li className="group-nav-clickables-li">
              <button className={`${this.state.members} group-nav-buttons`}
                      onClick={() => this.changeSelect("events")}>
                Members
              </button>
            </li>
          </ul>

          <div id="group-nav-member-status">
            JOIN TODAY
          </div>
        </div>
      </section>
    )
  }

  renderBody(){
    
  }

  render(){
    return(
      <div id="group-show-body-container">    
        {this.renderNavBar()} 

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
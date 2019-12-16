import React from "react";

class FindComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      groups: "selected",
      calendar: "unselected"
    };
  }

  componentDidMount(){
    
  }

  render(){
    return(
    <div id="find-page">
      <div id="find-header">
        <h2>Find your next event</h2>
        <p>
          <span id="find-group-events">
            6 events in your groups
          </span>
          <span>
          </span>
        </p>
      </div>
      <div id="find-search">
        <div id="find-search-form">
          SEARCH
        </div>
        <div id="find-selector-container">
          <button id={this.state.groups}
                  value="Groups">
          </button>
          <div className={this.state.calendar}>
            CALENDAR
          </div>
        </div>
      </div>
      <div find="find-main-content">

      </div>
    </div>
    )
  }
}

export default FindComponent;
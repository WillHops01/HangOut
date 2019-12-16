import React from "react";
import FindGroupComponent from "./find_group_component";

class FindHeaderComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      groups: "selected",
      calendar: "unselected"
    };
    this.selectPageView = this.selectPageView.bind(this);
    this.swapStates = this.swapStates.bind(this);
  }

  swapStates(){
    if (this.state.groups === "selected"){
      this.setState({
        groups: "unselected",
        calendar: "selected"
      });
    } else {
      this.setState({
        groups: "selected",
        calendar: "unselected"
      });
    }
  }

  selectPageView(e){    
    if (e.currentTarget.id !== "selected"){
      this.swapStates();
    }
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
                  onClick={this.selectPageView}>
            Groups
          </button>
          <button id={this.state.calendar}
                  onClick={this.selectPageView}>
            Calendar
          </button>
        </div>
      </div>
      <div find="find-main-content">
        <FindGroupComponent state={this.state}/>
      </div>
    </div>
    )
  }
}

export default FindHeaderComponent;
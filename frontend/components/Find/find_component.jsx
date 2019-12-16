import React from "react";

class FindComponent extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    
  }

  render(){
    return(
    <div id="find-page">
      <div id="find-header">
        <h2>Find your next event</h2>
        <p>
          <span>
            6 events in your groups
          </span>
          <span>

          </span>
        </p>
      </div>
      <div id="find-search">

      </div>
      <div find="find-main-content">

      </div>
    </div>
    )
  }
}

export default FindComponent;
import React from "react";

class DemoUserPrompt extends React.Component{
  constructor(props){
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose(){
    e.preventDefault();
    let path = `/`;
    this.props.history.push(path);
  }
  render(){
    return (
      <div id="demo-user-form-background">
        <div id="demo-user-box">
          <button id="close-button" onClick={handleClose}>
            {`\u0078`}
          </button>
          <span>
            HELLO
      </span>
          <span>

          </span>
          <button>

          </button>
          OR
      <button>

          </button>
        </div>
      </div>
    )
  }
};
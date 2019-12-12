import React from "react";
import { signup } from "../../actions/session_actions";

const DemoUserPrompt = () => {
  const handleClose = () => {
    e.preventDefault();
    let path = `/`;
    this.props.history.push(path);
  };
  debugger;
  return(
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
};

export default DemoUserPrompt;
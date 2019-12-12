import React from "react";
import { Link } from "react-router-dom";
import DemoUserPrompt from "../Session/demo_user_component";

class LoggedOut extends React.Component {
  constructor(props){
    super(props);
    this.demoUserForm = this.demoUserForm.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      demoUserPrompt: false
    };
  }

  handleClose(){
    e.preventDefault();
    let path = `/`;
    this.props.history.push(path);
  }
  
  demoUserForm(){
    // return(
    //   <div id="demo-user-form-background">
    //     <div id="demo-user-box">
    //       <button id="close-button" onClick={this.handleClose}>
    //         {`\u0078`}
    //       </button>
    //       <span>
    //         HELLO
    //       </span>
    //       <span>
    //       </span>
    //       <button>
    //       </button>
    //       OR
    //       <button>
    //       </button>
    //     </div>
    //   </div>
    // )    
  }

  render(){
    // let demoUserBox = this.state.demoUserPrompt ? DemoUserPrompt : null;
    // if (demoUserBox){
    //   let parent = document.getElementById("root")
    //   parent.appendChild(demoUserBox)
    // }
    return (
      <nav id="login-signup">
        <Link to="/login">Login</Link>
        {/* <button onClick={() => this.setState({ demoUserPrompt: true })}>
          Sign up
        </button> */}
        <Link to="/signup">Sign up</Link>
        
      </nav>
    )
  }  
}

export default LoggedOut;
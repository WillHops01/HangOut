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
    return (
      <nav id="login-signup">
        <Link to="/login" className="banner-button" >Log in</Link>        
        <Link to="/signup" className="banner-button" >Sign up</Link>        
      </nav>
    )
  }  
}

export default LoggedOut;
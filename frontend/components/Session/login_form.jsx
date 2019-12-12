import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formSwitch = this.formSwitch.bind(this);
    // this.addedSignUpField = this.addedSignUpField.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="error-message"
            key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleClose(e) {
    e.preventDefault();
    let path = `/`;
    this.props.history.push(path);
  }

  formSwitch() {
      if (this.props.formType === "Log in"){
          return(
            <span className="session-form-switch">Not registered with us yet? {this.props.navLink}</span>
          )
      } else {
          return(
            <span className="session-form-switch">Already a member? {this.props.navLink}</span>
          )
      }
  }

  // addedSignUpField(){
  //     if (this.props.formType === "continue"){
  //         return(
  //           <label className="session-form-label">
  //             <span>Username:</span>
  //             <input className="session-input-field"
  //               type="text"
  //               value={this.state.username}
  //               onChange={this.update('username')}
  //             />
  //           </label>
  //         )
  //     }
  // }

  render() {
    let formName = this.props.formType === "Log in" ? "Log in" : "Sign up";
    
    return (
      <div className="session-form-background">        
        <div className="session-form-grid-container"> 
          <button id="close-button" onClick={this.handleClose}>
            {`\u0078`} 
          </button>

          <form id="session-form" onSubmit={this.handleSubmit} >
            <span id="session-form-title">
              { formName }
              <img src="https://secure.meetupstatic.com/s/img/09300654065624139187/icon/icon_padlock.gif" />
            </span>
            { this.formSwitch()}
            {this.renderErrors()}
            {/* { this.addedSignUpField() } */}
            <label className="session-form-label">
              <span>Email address:</span> 
              <input className="session-input-field"
                type="text"
                value={this.state.email}
                onChange={this.update('email')}
              />
            </label>
            <label className="session-form-label">
              <span>Password:</span>              
              <input className="session-input-field"
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
            </label>              
            <input id="session-submit" type="submit" value={this.props.formType} />
          </form>
                             
          <div id="demo-user-container">
            <span className="demo-user-span">OR</span> 
            <button id="demo-user-button" onClick={(event)=>{
              this.state.email = "DemoUser",
              this.state.password = "hunter2",
              this.handleSubmit(event)
              }}>
              <span className="demo-user-span">
                Log In as a Demo User
              </span>
            </button>
          </div>  

        </div>
      </div>
    );
  }
}

export default SessionForm;

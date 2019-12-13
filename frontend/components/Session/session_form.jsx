import React from 'react';
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.renderSignup = this.renderSignup.bind(this);
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

  renderLogin(){
    return(
      <div className="login-form-container">
        <div id="login-form-header">
          {/* <button id="close-button" onClick={this.handleClose}>
            {`\u0078`}
          </button>         */}        
          <h2 id="session-form-title">
            Log in
            <img src="https://secure.meetupstatic.com/s/img/09300654065624139187/icon/icon_padlock.gif" />
          </h2>
          <p id="session-form-switch">
            Not registered with us yet? 
            <Link to="/signup" id="session-link">Sign up</Link>
          </p>
        </div>

        <div id="login-form-content">
          <form id="login-form" onSubmit={this.handleSubmit} >          
            {this.renderErrors()}
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
            <input id="session-submit" type="submit" value="Log in" /> 
          </form>
        </div>

        <div id="demo-user-container">
          <span className="demo-user-span">OR</span>
          <button id="demo-user-button" onClick={(event) => {
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
    )
  }

  renderSignup(){
    return (
      <div className="signup-form-container">
        <button id="close-button" onClick={this.handleClose}>
          {`\u0078`}
        </button>

        <form id="signup-form" onSubmit={this.handleSubmit} >
          <span id="signup-form-title">
            Sign up
            <img src="https://secure.meetupstatic.com/s/img/09300654065624139187/icon/icon_padlock.gif" />
          </span>
          {this.renderErrors()}
          <label className="signup-form-label">
            <span>Username:</span>
            <input className="signup-input-field"
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
            />
          </label>
          <label className="signup-form-label">
            <span>Email address:</span>
            <input className="signup-input-field"
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
            />
          </label>
          <label className="signup-form-label">
            <span>Password:</span>
            <input className="signup-input-field"
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>
          <input id="session-submit" type="submit" value="Continue" />
        </form>

        {/* <div id="demo-user-container">
          <span className="demo-user-span">OR</span>
          <button id="demo-user-button" onClick={(event) => {
            this.state.email = "DemoUser",
              this.state.password = "hunter2",
              this.handleSubmit(event)
          }}>
            <span className="demo-user-span">
              Log In as a Demo User
              </span>
          </button>
        </div> */}

      </div>
    )

  }

  render() {
    let form = this.props.formType === "login" ? this.renderLogin() : null;
    
    return (
      <div id="session-form-background">
        { form }
        <div id="testing-footer">

        </div>
      </div>
    );
  }
}

export default SessionForm;

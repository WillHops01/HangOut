import React from 'react';
//import { Link, Redirect } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formSwitch = this.formSwitch.bind(this);
    this.addedSignUpField = this.addedSignUpField.bind(this);
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

//   renderErrors() {
//     return(
//       <ul>
//         {this.props.errors.map((error, i) => (
//           <li key={`error-${i}`}>
//             {error}
//           </li>
//         ))}
//       </ul>
//     );
//   }

  handleClose(e) {
    e.preventDefault();
    let path = `/`;
    this.props.history.push(path);
  }

  formSwitch() {
      if (this.props.formType === "login"){
          return(
          <h4>Not registered with us yet? {this.props.navLink}</h4>
          )
      } else {
          return(
              <h3>Still working, see session_form.jsx</h3>
          )
      }
  }

  addedSignUpField(){
      if (this.props.formType === "signup"){
          return(
            <label>Username:
                <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
          )
      }
  }

  render() {
    return (
      <div className="session-form-background">        
        <div className="session-form-box"> 
          <button id="close-button" onClick={this.handleClose}>
            {`\u0078`} </button>
          <form onSubmit={this.handleSubmit} >
            LOG IN
            { this.formSwitch()}
            {/* {this.renderErrors()} */}
              { this.addedSignUpField() }
              <label>Email address:
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                />
              </label>
              <label>Password:
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
              </label>
              <input className="session-submit" type="submit" value={this.props.formType} />
          </form>
        </div>
      </div>
    );
  }
}

export default SessionForm;

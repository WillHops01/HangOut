import React from 'react';

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
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="session-form-box">
          LOG IN
          <br/>
          { this.formSwitch()}
          {/* {this.renderErrors()} */}
            <br/>
            { this.addedSignUpField() }
            <label>Email address:
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default SessionForm;

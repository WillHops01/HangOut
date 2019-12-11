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
          <li key={`error-${i}`}>
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
            <label className="session-form-label">
              <span>Username:</span>
              <input className="session-input-field"
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
              />
            </label>
          )
      }
  }

  render() {
    //debugger;
    return (
      <div className="session-form-background">        
        <div className="session-form-grid-container"> 
          <button id="close-button" onClick={this.handleClose}>
            {`\u0078`} 
          </button>
          <form id="session-form" onSubmit={this.handleSubmit} >
            LOG IN
            { this.formSwitch()}
            {this.renderErrors()}
            { this.addedSignUpField() }
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
          <div>
            <button onClick={(event)=>{
              this.state.email = "DemoUser",
              this.state.password = "hunter2",
              this.handleSubmit(event)
            }}>
              <span className="input-field-name">
                Demo User Log In
              </span>
            </button>
          </div>    
        </div>
      </div>
    );
  }
}

export default SessionForm;

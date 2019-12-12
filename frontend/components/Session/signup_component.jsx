import React from 'react';
import { signup } from "../../actions/session_actions";

class SignUpForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    //debugger;
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleClose = this.handleClose.bind(this);
  }

  renderErrors() {
    return (
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

  render(){
    return (
      <div id="signup-container">AHHHHHh
        <form>
        eh
        </form>
      </div>
    )
  }
}

export default SignUpForm;
// import React from 'react';
// import { Link } from 'react-router-dom';

// class SignUpForm extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       username: '',
//       password: '',
//       email: ''
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     // this.renderErrors = this.renderErrors.bind(this);
//     // this.handleClose = this.handleClose.bind(this);
//   }

//   renderErrors() {
//     return (
//       <ul>
//         {this.props.errors.map((error, i) => (
//           <li className="error-message"
//             key={`error-${i}`}>
//             {error}
//           </li>
//         ))}
//       </ul>
//     );
//   }

//   update(field) {
//     return e => this.setState({
//       [field]: e.currentTarget.value
//     });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const user = Object.assign({}, this.state);
//     this.props.signup(user);
//   }

//   render(){
//     return (
//       <div id="signup-container">AHHHHHh
      
//         <button onClick={this.handleClose}>
//           {`\u0078`} 
//         </button>

//         <form id="signup-form" onSubmit={this.handleSubmit} >
//           <span id="signup-form-title">
//             Sign Up
//             <img src="https://secure.meetupstatic.com/s/img/09300654065624139187/icon/icon_padlock.gif" />
//           </span>
//           <span>Already a member? 
//             <Link to="/login" />
//           </span>
//           {this.renderErrors()}
//           <label className="signup-form-label">
//             <span>Email address:</span> 
//             <input className="session-input-field"
//               type="text"
//               value={this.state.email}
//               onChange={this.update('email')}
//             />
//           </label>
//           <label className="signup-form-label">
//             <span>Username:</span>
//             <input className="signup-input-field"
//               type="text"
//               value={this.state.username}
//               onChange={this.update('username')}
//             />
//           </label>
//           <label className="signup-form-label">
//             <span>Password:</span>              
//             <input className="signup-input-field"
//               type="password"
//               value={this.state.password}
//               onChange={this.update('password')}
//             />
//           </label>              
//           <input type="submit" value="Continue" />
//         </form>
//       </div>
//     )
//   }
// }

// export default SignUpForm;
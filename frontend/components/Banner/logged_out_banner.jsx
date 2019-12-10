import React from "react";
import { Link } from "react-router-dom"

const LoggedOut = () => {
    return (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign up!</Link>
    </nav>
    )
}



export default LoggedOut;
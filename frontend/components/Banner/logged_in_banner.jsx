import React from "react";
// import { Link } from "react-router-dom";

const LoggedIn = ({logout}) => (
    <div id="logged-in-banner">
        <button onClick={logout}>
            Log Out
        </button>
    </div>        
)


export default LoggedIn;
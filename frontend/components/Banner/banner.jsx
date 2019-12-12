import React from "react";
import SignedIn from "./logged_in_banner";
import LoggedOut from "./logged_out_banner";

class Banner extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            status: "hidden"
        };
    }

    loggedInHeader(){
        
        return(
            <h3>LogOut</h3>
        )
    }

    render(){
        const currentUser = this.props.currentUser
        const display = (typeof currentUser === "undefined" ) ? <LoggedOut /> : this.loggedInHeader()
        return(
            <div id="banner">
                <div id="website-title">
                    Hang Out
                </div>
                { display }
            </div>
        )
    }
}

export default Banner;
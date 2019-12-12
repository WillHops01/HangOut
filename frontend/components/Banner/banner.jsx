import React from "react";
// import SignedIn from "./logged_in_banner";
import LoggedOut from "./logged_out_banner";

class Banner extends React.Component {
    constructor(props){
        super(props);
        this.changeDropdownState = this.changeDropdownState.bind(this);
        this.state = {
            status: "hidden"
        };
    }

    changeDropdownState(){
        if(this.state.status === "hidden"){
            this.state.status = "displayed";
        } else {
            this.state.status = "hidden";
        }
    }

    loggedInHeader(){        
        return(
            <div id="user-nav-icon-container">
                <button onClick={this.changeDropdownState}>
                    <img src="/letter_image.png"/>
                </button>
                <nav id={this.state.status}>


                </nav>
            </div>
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
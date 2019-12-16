import React from "react";
// import SignedIn from "./logged_in_banner";
import LoggedOut from "./logged_out_banner";
import { withRouter } from "react-router-dom";

class Banner extends React.Component {
    constructor(props){
        super(props);
        this.changeDropdownState = this.changeDropdownState.bind(this);
        this.loggedInHeader = this.loggedInHeader.bind(this);
        this.clicktoClose = this.clicktoClose.bind(this);
        this.state = {
            status: "hidden"
        };
    }

    changeDropdownState(){        
        if(this.state.status === "hidden"){
            this.setState({status: "displayed"});
        } else {
            this.setState({ status: "hidden" });
        }
    }

    clicktoClose(){
        this.changeDropdownState();
        this.props.logout();
        this.props.history.push("/");
    }

    clicktoHome(){

    }

    loggedInHeader(){           
        return(
            <div id="user-nav-icon-container">
                <button onClick={this.changeDropdownState}>
                    <img src="/letter_image.png"/>
                </button>
                <nav id={this.state.status}>
                    <div id="dropdown-group-names"> 
                        <ul>
                            <li>
                                <span>
                                    Long Group Name One
                                </span>
                            </li>
                            <li>
                                <span>
                                    Medium Group Name 2
                                </span>
                            </li>
                            <li>
                                <span>
                                    Short Group 3
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div id="dropdown-nav-options">
                        <button className="dropdown-nav-Items">
                            Testing Button
                        </button>
                        <button className="dropdown-nav-Items"
                            onClick={this.clicktoClose}>
                                Log Out
                        </button>
                    </div>
                </nav>
            </div>
        )
    }

    render(){
        const currentUser = this.props.currentUser
        const display = (typeof currentUser === "undefined" ) ? <LoggedOut /> : this.loggedInHeader()
        return(
            <div id="banner">
                <button onClick={() => this.props.history.push("/find")}
                    id="website-title">
                    Hang Out
                </button>
                { display }
            </div>
        )
    }
}

export default withRouter(Banner);
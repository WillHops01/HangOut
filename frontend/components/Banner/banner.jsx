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
        this.userGroups = this.userGroups.bind(this);
        this.clickToGroup = this.clickToGroup.bind(this);
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

    clickToGroup(id){
        this.props.history.push(`/groups/${id}`);
    }

    userGroups(){        
        if (this.state.status === "displayed"){
            let groups = this.props.groups;
            let current_user_groups = this.props.currentUser.current_user_groups

            if (Object.keys(groups).length >= current_user_groups.length) {
                let groupnames = current_user_groups.map((groupId, idx) => {                    
                    if (idx < 3) {
                        return (
                            <li key={idx}>
                                <button onMouseDown={() => this.clickToGroup(groupId)}>
                                    {groups[groupId].name}
                                </button>                                
                            </li>
                        )
                    } else {
                        return
                    }
                })                
                return (
                    <div id="dropdown-group-names">
                        <ul>
                            {groupnames}
                        </ul>
                    </div>
                )
            } else {
                return (
                    <div id="dropdown-group-names">

                    </div>
                )
            }
        }
        
    }

    loggedInHeader(){   
        const currentUser = this.props.currentUser        
        return(
            <div id="user-nav-icon-container">
                <button tabIndex="0"
                        onBlur={() => this.changeDropdownState()}
                        onFocus={() => this.changeDropdownState()}>
                    <img src="/letter_image.png"/>
                </button>
                <nav id={this.state.status}>
                    { this.userGroups()}
                    <div id="dropdown-nav-options">
                        {/* <button className="dropdown-nav-Items">
                            Testing Button
                        </button> */}
                        <button className="dropdown-nav-Items"
                            onMouseDown={() => this.clicktoClose()}>
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
import React from "react";
import SignedIn from "./logged_in_banner";
import LoggedOut from "./logged_out_banner";

class Banner extends React.Component {
    constructor(props){
        super(props)
    };

    render(){
        const currentUser = this.props.currentUser
        const display = (typeof currentUser === "undefined" ) ? <LoggedOut/> : <SignedIn/>
        return(
            <div id="banner"> Imported Text
                <div id="website-title">
                    Website Title
                </div>
                { display }
            </div>
        )
    }
}

export default Banner;
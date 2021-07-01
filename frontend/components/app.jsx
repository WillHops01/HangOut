import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { NotLoggedRoute, ProtectedRoute } from "../util/route_util";

import BannerContainer from "./Banner/banner_container";
import LogInContainer from "./Session/login_container";
import CreateAccountContainer from "./Session/signup_container";
import SplashContainer from "./Splash/splash";
import EventNearYou from "./Events/temp_events";
import FindContainer from "./Find/find_container";

import GroupContainer from "./Groups/group_container";


const App = () => {
    
    return(
    
    <div id="App">
        <BannerContainer />
        <Switch>
            <NotLoggedRoute exact path="/login"  component={props => (
                <div id="app-login-container">
                    <LogInContainer />
                    <EventNearYou />
                </div>
            )} />      
            <NotLoggedRoute exact path="/signup" component={CreateAccountContainer} />
        </Switch>
        <NotLoggedRoute exact path="/" component={SplashContainer} />
        
        <Route path="/groups/:groupId" component={GroupContainer} />
         
        <ProtectedRoute exact path="/find" component={FindContainer} />
    </div>
)}

export default App;


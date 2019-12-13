import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { NotLoggedRoute } from "../util/route_util";

import BannerContainer from "./Banner/banner_container";
import SignInContainer from "./Session/login_container";
import CreateAccountContainer from "./Session/signup_container";
import SplashContainer from "./Splash/splash";
import EventNearYou from "./Events/temp_events";
import TestComponent from "./test_component";


const App = () => (
    <div id="App">
        <BannerContainer />
        <Switch>
            <NotLoggedRoute exact path="/login"  component={props => (
                <div id="app-login-container">
                    <SignInContainer />
                    <TestComponent />
                </div>
            )} />
            
            
            
            
           
                        
            <NotLoggedRoute  exact path="/signup" component={CreateAccountContainer} />
        </Switch>
        <Route exact path="/" component={SplashContainer} />
        <EventNearYou/>
    </div>
)

export default App;


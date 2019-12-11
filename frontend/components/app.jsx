import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { NotLoggedRoute } from "../util/route_util";

import BannerContainer from "./Banner/banner_container";
import SignInContainer from "./Session/signin_container";
import CreateAccountContainer from "./Session/create_account_container";
import SplashContainer from "./Splash/splash";
import EventNearYou from "./Events/temp_events";


const App = () => (
    <div id="App">
        <BannerContainer />
        <Switch>
            <NotLoggedRoute exact path="/login" component={SignInContainer} />
            <NotLoggedRoute exact path="/signup" component={CreateAccountContainer} />
        </Switch>
        <SplashContainer/>
        <EventNearYou/>
        
    </div>
)

export default App;


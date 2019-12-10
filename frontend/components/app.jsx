import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { NotLoggedRoute } from "../util/route_util";

import BannerContainer from "./Banner/banner_container";
import SignInContainer from "./Session/signin_container";
import SplashContainer from "./Splash/splash";


const App = () => (
    <div id="App">
        <BannerContainer />
        <Switch>
            <NotLoggedRoute exact path="/login" component={SignInContainer} />
        </Switch>
        <SplashContainer/>
        
    </div>
)

export default App;


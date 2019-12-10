import React from "react";
import BannerContainer from "./Banner/banner_container";

import { Route, Switch, Link } from "react-router-dom";
import { NotLoggedRoute } from "../util/route_util";
import SignInContainer from "./Session/signin_container";


const App = () => (
    <div id="App">
        <BannerContainer />
        <Switch>
            <NotLoggedRoute exact path="/login" component={SignInContainer} />
        </Switch>
        <main></main>
    </div>
)

export default App;


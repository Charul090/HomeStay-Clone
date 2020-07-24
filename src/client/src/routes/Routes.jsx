import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home/Home";
import HeroCard from "../components/HeroCard/HeroCard";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/guest" component={HeroCard}/>
        </Switch>
    )
}

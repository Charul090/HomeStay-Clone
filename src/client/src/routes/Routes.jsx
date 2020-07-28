import React from "react";
import { Route, Switch } from "react-router-dom";
import ListingMain from '../components/listing/ListingMain'
import Home from "../components/Home/Home";
import HeroCard from "../components/HeroCard/HeroCard";
import NavBarAfterLogin  from "../components/NavBarAfterLogin/NavBarAfterLogin";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/carosel" exact render={(props) => <NavBarAfterLogin {...props}/>} />
            <Route path="/destination" exact render={(props) => <ListingMain {...props}/>} />
            <Route path="/guest" component={HeroCard}/>
        </Switch>
    )
}


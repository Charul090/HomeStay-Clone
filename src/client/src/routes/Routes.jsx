import React from "react";
import { Route, Switch } from "react-router-dom";
import ListingMain from '../components/listing/ListingMain'
import Home from "../components/Home/Home";
import HeroCard from "../components/HeroCard/HeroCard";
import ContactHostModal  from "../components/ContactHostModal/ContactHostModal";
import Entity from "../components/Entity/Entity.jsx";
import SearchBarDummy from "../components/SearchBarDummy/SearchBarDummy"
import ForgotPassword from '../components/ForgotPassword/ForgotPassword.jsx'
import ResetPassword from '../components/ResetPassword/ResetPassword'
import HostSignUpPage from '../components/HostSignUpPage/HostSignUpPage'


export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/host" exact render={(props) => <HostSignUpPage {...props}/>}/>
            <Route path="/recovery" exact render={(props) => <ForgotPassword {...props}/>}/>
            <Route path="/reset" exact render={(props) => <ResetPassword {...props}/>}/>
            <Route path="/destination" exact render={(props) => <ListingMain {...props}/>} />
            <Route path="/apartment/:id" component={Entity} />
            <Route path="/guest" component={HeroCard}/>
        </Switch>
    )
}


import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Carosel from './Carosel.jsx'
import Destination from './Destination'


const Routes = () => {
  return (
    <>
     <Carosel />

      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/destination" exact render={() => <Destination />} />
      </Switch>
    </>
  );
};
export default Routes;
import React from "react";
import { Route, Switch } from "react-router-dom";
import Carosel from '../components/Carosel/Carosel.jsx'
import ListingMain from '../components/listing/ListingMain'


const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/carosel" exact render={() => <Carosel />} />
        <Route path="/destination" exact render={(props) => <ListingMain {...props}/>} />
      </Switch>
    </>
  );
};
export default Routes;
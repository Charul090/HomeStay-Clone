import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Carosel from './Carosel.jsx'
import ListingMain from './listing/ListingMain'
import Slider from './listing/Slider.jsx'
import ListCard from './listing/ListCard.jsx'
import SearchBar from './listing/SearchBar.jsx'

const Routes = () => {
  return (
    <>
     {/* <Carosel />
    <Slider />
    <ListCard/>
    <SearchBar/> */}
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/destination" exact render={() => <ListingMain />} />
        <Route path="/listing" render={() => <Slider />} />
      </Switch>
    </>
  );
};
export default Routes;
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home/Home";
import Carosel from '../components/Carosel/Carosel.jsx'
import ListingMain from '../components/listing/ListingMain'
import Slider from '../components/listing/Slider.jsx'
import ListCard from '../components/listing/ListCard.jsx'
import SearchBar from '../components/listing/SearchBar.jsx'
import { Carousel } from "react-bootstrap";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <Carosel />} />
        <Route path="/destination" exact render={() => <ListingMain />} />
      </Switch>
    </>
  );
};
export default Routes;
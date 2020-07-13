import React from "react";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Yelpcipes from "../pages/Yelpcipes";
import Trackr from "../pages/Trackr";
import { Switch, Route } from "react-router-dom";

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={About}></Route>
      <Route exact path="/portfolio" component={Portfolio}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Route exact path="/yelpcipes" component={Yelpcipes}></Route>
      <Route exact path="/trackr" component={Trackr}></Route>
    </Switch>
  );
}

export default Main;

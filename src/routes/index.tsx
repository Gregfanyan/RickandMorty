import React from "react";
import { Switch, Route } from "react-router-dom";

import Character from "../components/Character";
import Episode from "../components/Episode";
import SingleCharacter from "../components/SingleCharacter";
import SingleEpisode from "../components/SingleEpisode";
import Header from "../pages/Header";

const Routes = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Character} />
      <Route path="/episode" component={Episode} />
      <Route path="/:id" component={SingleCharacter} />
      <Route path="/:id" component={SingleEpisode} />
    </Switch>
  </>
);
export default Routes;

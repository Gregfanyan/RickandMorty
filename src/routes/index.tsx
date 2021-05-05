import React from "react";
import { Switch, Route } from "react-router-dom";

import CharacterPage from "../pages/CharacterPage";
import EpisodePage from "../pages/EpisodePage";
import SingleCharacter from "../components/SingleCharacter";
import SingleEpisode from "../components/SingleEpisode";
import Header from "../pages/Header";
import { useCharacter } from "../hooks/useCharacter";

const Routes = () => {
  const [character] = useCharacter();

  return (
    <>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          component={() => <CharacterPage character={character} />}
        />
        <Route path="/episode" component={EpisodePage} />
        <Route
          path="/:id"
          component={() => <SingleCharacter character={character} />}
        />
        <Route path="/:id" component={SingleEpisode} />
      </Switch>
    </>
  );
};

export default Routes;

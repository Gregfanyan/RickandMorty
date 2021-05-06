import React from "react";
import { Switch, Route } from "react-router-dom";

import CharacterPage from "../pages/CharacterPage";
import EpisodePage from "../pages/EpisodePage";
import SingleCharacter from "../components/SingleCharacter";
import SingleEpisode from "../components/SingleEpisode";
import Header from "../pages/Header";
import { useCharacter } from "../hooks/useCharacter";
import { useEpisode } from "../hooks/useEpisode";
import useCharAndEpisodes from "../hooks/useCharAndEpisodes";

const Routes = () => {
  const [character] = useCharacter();
  const [episode] = useEpisode();
  const data = useCharAndEpisodes();
  console.log("data", data);
  return (
    <>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          component={() => <CharacterPage character={data} />}
        />
        <Route
          path="/episode"
          component={() => <EpisodePage episode={data} />}
        />
        <Route
          path="/episodeid/:id"
          component={() => <SingleEpisode episodeData={data} />}
        />
        <Route
          path="/:id"
          component={() => <SingleCharacter character={data} />}
        />
      </Switch>
    </>
  );
};

export default Routes;

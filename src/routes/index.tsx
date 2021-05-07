import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import localforage from "localforage";

import CharacterPage from "../pages/CharacterPage";
import EpisodePage from "../pages/EpisodePage";
import SingleCharacter from "../components/SingleCharacter";
import SingleEpisode from "../components/SingleEpisode";
import Header from "../pages/Header";
import useCharAndEpisodes from "../hooks/useCharAndEpisodes";
import EpisodeItem from "../components/EpisodeItem";
import CharacterItem from "../components/CharacterItem";
import Footer from "../components/Footer";

const Routes = () => {
  const data = useCharAndEpisodes();

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
          path="/characteritem/:id"
          component={() => <CharacterItem character={data} />}
        />
        <Route
          path="/episodeitem/:episode"
          component={() => <EpisodeItem episodeData={data} />}
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
      <Footer />
    </>
  );
};

export default Routes;

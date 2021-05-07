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
//import Footer from "../components/Footer";

const Routes = () => {
  const data = useCharAndEpisodes();
  const [likedList, setLikedList] = React.useState<string[]>([]);

  useEffect(() => {
    localforage.getItem("likedItem").then((val) => {
      if (!val) {
        setLikedList([]);
      } else {
        setLikedList(val as string[]);
      }
    });
  }, []);

  const likeBtnHandleClick = (id: any) => {
    setLikedList((prev: string[]) => {
      const newState = [...prev, id];
      localforage.setItem("likedItem", newState);
      return newState;
    });
  };

  return (
    <>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <CharacterPage
              character={data}
              likedList={likedList}
              likeBtnHandleClick={likeBtnHandleClick}
            />
          )}
        />
        <Route
          path="/episode"
          component={() => <EpisodePage episode={data} />}
        />
        <Route
          path="/characteritem/:id"
          component={() => (
            <CharacterItem
              character={data}
              likedList={likedList}
              likeBtnHandleClick={likeBtnHandleClick}
            />
          )}
        />
        <Route
          path="/episodeitem/:episode"
          component={() => <EpisodeItem episodeData={data} />}
        />
        <Route
          path="/episodeid/:id"
          component={() => (
            <SingleEpisode
              episodeData={data}
              likedList={likedList}
              likeBtnHandleClick={likeBtnHandleClick}
            />
          )}
        />
        <Route
          path="/:id"
          component={() => (
            <SingleCharacter
              character={data}
              likedList={likedList}
              likeBtnHandleClick={likeBtnHandleClick}
            />
          )}
        />
      </Switch>
      {/*  <Footer /> */}
    </>
  );
};

export default Routes;

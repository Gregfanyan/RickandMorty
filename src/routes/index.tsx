import { useEffect, useState } from "react";
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
import { RouteProps } from "../types/CharacterType";
import Footer from "../components/Footer";

const Routes = () => {
  const { data, loading }: RouteProps | any = useCharAndEpisodes();
  const [likedList, setLikedList] = useState<string[]>([]);

  useEffect(() => {
    localforage.getItem("likedItem").then((val) => {
      if (!val) {
        setLikedList([]);
      } else {
        setLikedList(val as string[]);
      }
    });
  }, []);

  const likeBtnHandleClick = (id: string) => {
    setLikedList((prev: string[]) => {
      const newState = [...prev, id];
      localforage.setItem("likedItem", newState);
      return newState;
    });
  };

  const unLikeBtnHandleClick = (id: string) => {
    setLikedList((prev: string[]) => {
      const filteredList = prev.filter((filteredId) => filteredId !== id);
      localforage.setItem("likedItem", filteredList);
      return filteredList;
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
              loading={loading}
              unLikeBtnHandleClick={unLikeBtnHandleClick}
            />
          )}
        />
        <Route
          path="/episode"
          component={() => <EpisodePage episode={data} loading={loading} />}
        />
        <Route
          path="/characteritem/:id"
          component={() => (
            <CharacterItem
              character={data}
              likedList={likedList}
              likeBtnHandleClick={likeBtnHandleClick}
              loading={loading}
              unLikeBtnHandleClick={unLikeBtnHandleClick}
            />
          )}
        />
        <Route
          path="/episodeitem/:episode"
          component={() => <EpisodeItem episodeData={data} loading={loading} />}
        />
        <Route
          path="/episodeid/:id"
          component={() => (
            <SingleEpisode
              episodeData={data}
              likedList={likedList}
              likeBtnHandleClick={likeBtnHandleClick}
              loading={loading}
              unLikeBtnHandleClick={unLikeBtnHandleClick}
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
              loading={loading}
              unLikeBtnHandleClick={unLikeBtnHandleClick}
            />
          )}
        />
      </Switch>
      {loading === false && <Footer />}
    </>
  );
};

export default Routes;

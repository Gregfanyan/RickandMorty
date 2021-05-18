import { Dispatch } from "redux";
import { DATA_QUERY } from "../../hooks/useCharAndEpisodes";
import { FETCH_CHARACTER_SUCCESS } from "../index";

export const fetchCharSuccess = (characters: any) => {
  return {
    type: FETCH_CHARACTER_SUCCESS,
    payload: characters,
  };
};

export const fetchCharacters = () => {
  return (dispatch: Dispatch) => {
    fetch("https://rickandmortyapi.com/graphql", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: DATA_QUERY }),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log("res", res);
        dispatch(fetchCharSuccess(res));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

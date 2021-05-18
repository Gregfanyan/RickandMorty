import { DATA_QUERY } from "../../hooks/useCharAndEpisodes";
import {
  FETCH_CHARACTER_REQUEST,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_FAILURE,
} from "../../types/ReduxTypes";

export const fetchCharSuccess = (characters: any) => {
  return {
    type: FETCH_CHARACTER_SUCCESS,
    payload: characters,
  };
};

export const fetchCharacters = () => (dispatch: any) => {

  fetch("https://rickandmortyapi.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: DATA_QUERY }),
  })
    .then((response) => response.json())
    .then((res) =>
      dispatch({
        type: FETCH_CHARACTER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((error) => {
      console.log("error");
    });
};

import { DATA_QUERY } from "../../hooks/useCharAndEpisodes";
import {
  FETCH_CHARACTER_SUCCESS,
} from "../index";

export const fetchCharSuccess = (characters) => {
  return {
    type: FETCH_CHARACTER_SUCCESS,
    payload: characters,
  };
};

export const fetchCharacters = () => (dispatch) => {
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

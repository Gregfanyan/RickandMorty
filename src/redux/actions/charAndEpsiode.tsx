import { Dispatch } from "redux";

import { DATA_QUERY } from "../../hooks/useCharAndEpisodes";
import {
  FETCH_CHARACTER_REQUEST,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_FAILURE,
} from "../../types/ReduxTypes";

export const fetchDataSuccess = (characters: any) => {
  return {
    type: FETCH_CHARACTER_SUCCESS,
    payload: characters,
  };
};

export const fetchDataRequest = () => {
  return {
    type: FETCH_CHARACTER_SUCCESS,
  };
};

export const fetchCharacters = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchDataRequest());
    fetch("https://rickandmortyapi.com/graphql", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: DATA_QUERY }),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log("response", res.data);
        dispatch(fetchDataSuccess(res.data));
      })
      .catch((error) => {
        console.log("error");
      });
  };
};

import { Dispatch } from "redux";
import { DATA_QUERY } from "../../hooks/useCharAndEpisodes";
import { FETCH_CHARACTER_SUCCESS } from "../index";
import { client } from "../store";
export const fetchCharSuccess = (characters: any) => {
  return {
    type: FETCH_CHARACTER_SUCCESS,
    payload: characters,
  };
};

export const fetchCharacters =
  () => (dispatch: Dispatch, getState: any, client: any) => {
    dispatch({
      type: "GET_CART_ATTEMPT",
    });
    client
      .query({
        query: DATA_QUERY,
        fetchPolicy: "no-cache",
      })
      .then((res: any) => {
        dispatch(fetchCharSuccess(res.data));
      });
  };

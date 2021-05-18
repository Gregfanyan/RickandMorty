import { CharAndEpisodeProps } from "./EpisodeType";

export const FETCH_CHARACTER_REQUEST = "FETCH_CHARACTER_REQUEST";
export const FETCH_CHARACTER_SUCCESS = "FETCH_CHARACTER_SUCCESS";
export const FETCH_CHARACTER_FAILURE = "FETCH_CHARACTER_FAILURE";

export type dataProps = {
    data: CharAndEpisodeProps;
    loading: boolean;
    error: string | any;
  };

import { CharacterType } from "./CharacterType";

export type EpisodeType = {
  air_date: string;
  name: string;
  episode: string;
  id: number;
  characters: any;
  location: any;
  origin: any;
};

export type EpisodeProps = {
  episodedata: EpisodeType;
};

export type SingleEpisodeProps = {
  episodeData: EpisodeType[] | any;
};

export type episodeProps = {
  episode: string;
};

export type dataProps = {
  episode: EpisodeType;
  characters: CharacterType;
};

export type EpisodePageProps = {
  episode: dataProps | any;
  loading: boolean;
};

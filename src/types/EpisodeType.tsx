import { CharacterType } from "./CharacterType";

export type EpisodeType = {
  air_date: string;
  name: string;
  episode: string;
  id: number;
  characters: [];
  location: [];
  origin: [];
};

export type EpisodeProps = {
  episodedata: EpisodeType;
};

export type SingleEpisodeProps = {
  episodeData: EpisodeType[] | any;
  likeBtnHandleClick: Function;
  likedList: string[];
  loading: boolean;
  unLikeBtnHandleClick: Function;
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

export type EpisodeCharacterProps = {
  char: CharacterType;
  likeBtnHandleClick: Function;
  likedList: string[];
  unLikeBtnHandleClick:Function
};

export type EpisodeItemProps = {
  episodeData: EpisodeType[] | any;
  loading: boolean;
};

import { CharacterType } from "./CharacterType";

export type EpisodeType = {
  air_date: string;
  name: string;
  episode: string;
  id: number;
  characters: [];
  location: {
    name: string;
  };
  origin: {
    name: string;
  };
};

export type EpisodeProps = {
  episodedata: EpisodeType;
};

export type SingleEpisodeProps = {
  episodeData: EpisodeType[];
  likeBtnHandleClick: Function;
  likedList: string[];
  loading: boolean;
  unLikeBtnHandleClick: Function;
};

export type EpisodeItemsProps = {
  episode: EpisodeType[];
  likeBtnHandleClick: Function;
  likedList: string[];
  loading: boolean;
  unLikeBtnHandleClick: Function;
};

export type episodeProps = {
  episode: string;
};

export type CharAndEpisodeProps = {
  episodes: EpisodeType;
  characters: CharacterType;
};

export type dataProps = {
  data: CharAndEpisodeProps;
  loading: boolean;
  error: string | any;
};

export type EpisodePageProps = {
  episode: EpisodeType[];
  loading: boolean;
};

export type EpisodeCharacterProps = {
  char: CharacterType;
  likeBtnHandleClick: Function;
  likedList: string[];
  unLikeBtnHandleClick: Function;
};

export type EpisodeItemProps = {
  episodeData: EpisodeType[];
  loading: boolean;
};

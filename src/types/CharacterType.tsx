import { EpisodeType } from "./EpisodeType";

export type CharacterType = {
  image: string;
  name: string;
  status: string;
  id: number;
  episode: [];
  location: any;
  origin: any;
};

export type CharacterPageProps = {
  character: CharacterType[] | any;
  likedList: string[];
  likeBtnHandleClick: Function;
  loading: boolean;
};

export type SingleCharacterProps = {
  character: CharacterType[] | any;
  likedList: string[];
  likeBtnHandleClick: Function;
  loading: boolean;
};

export type CharacterProps = {
  char: CharacterType;
  likeBtnHandleClick: Function;
  isLiked: boolean;
};

export type IdProps = {
  id: string;
};

export type dataProps = {
  episode: EpisodeType;
  characters: CharacterType;
};

export type RouteProps = {
  data: dataProps;
  loading: boolean;
};

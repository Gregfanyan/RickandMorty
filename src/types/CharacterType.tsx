import { EpisodeType } from "./EpisodeType";

export type CharacterType = {
  image: string;
  name: string;
  status: string;
  id: number;
  location: any;
  episode: any;
  origin: any;
};

export type CharacterPageProps = {
  character: CharacterType[] | any;
  likedList: string[];
  setLikedList: any;
};

export type SingleCharacterProps = {
  character: CharacterType[] | any;
};

export type CharacterProps = {
  char: CharacterType;
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

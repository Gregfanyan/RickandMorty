import { EpisodeType } from "./EpisodeType";

export type CharacterType = {
  image: string;
  name: string;
  status: string;
  id: number;
  episode: string[];
  location: {
    name: string;
  };
  origin: {
    name: string;
  };
};

export type CharacterPageProps = {
  character: CharacterType[];
  likedList: string[];
  likeBtnHandleClick: Function;
  loading: boolean;
  unLikeBtnHandleClick: Function;
};

export type SingleCharacterProps = {
  character: CharacterType[];
  likedList: string[];
  likeBtnHandleClick: Function;
  loading: boolean;
  unLikeBtnHandleClick: Function;
};

export type CharacterProps = {
  char: CharacterType;
  likeBtnHandleClick: Function;
  isLiked: boolean;
  unLikeBtnHandleClick: Function;
};

export type IdProps = {
  id: string;
};



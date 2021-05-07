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

export type CharacterType = {
  image: string;
  name: string;
  status: string;
  id: number;
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
    id: string
}



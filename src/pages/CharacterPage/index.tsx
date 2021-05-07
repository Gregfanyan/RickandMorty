import React from "react";
import localforage from "localforage";

import Character from "../../components/Character";
import { CharacterPageProps } from "../../types/CharacterType";
import * as S from "./styles";

function CharacterPage({ character }: any) {
  const [likedList, setLikedList] = React.useState<string[]>([]);

  React.useEffect(() => {
    localforage.getItem("likedItem").then((val) => {
      if (!val) {
        setLikedList([]);
      } else {
        setLikedList(val as string[]);
      }
    });
  }, []);
  return (
    <S.CharacterSection>
      {character &&
        character.characters &&
        character.characters.results &&
        character.characters.results.map((char: any) => (
          <Character
            key={char.id}
            char={char}
            setLikedList={setLikedList}
            isLiked={[...likedList].some((id) => id === char.id)}
          />
        ))}
    </S.CharacterSection>
  );
}

export default CharacterPage;

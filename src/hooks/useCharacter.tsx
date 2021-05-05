import { useState, useEffect } from "react";
import axios from "axios";
import { characterUrl } from "../api/api";
import { CharacterType } from "../types/CharacterType";
export function useCharacter() {
  const [character, setCharacter] = useState<CharacterType[]>([]);

  useEffect(() => {
    axios
      .get(characterUrl)
      .then((response) => {
        setCharacter(response.data.results);
      })
      .catch((e) => console.log("error"));
  }, []);
  return [character];
}

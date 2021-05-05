import { useState, useEffect } from "react";
import axios from "axios";
import { characterUrl } from "../api/api";

export function useCharacter() {
  const [character, setCharacter] = useState([]);

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

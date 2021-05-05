import { useState, useEffect } from "react";
import axios from "axios";
import { episodeUrl } from "../api/api";
import { EpisodeType } from "../types/EpisodeType";
export function useEpisode() {
  const [episode, setEpisode] = useState<EpisodeType[]>([]);

  useEffect(() => {
    axios
      .get(episodeUrl)
      .then((response) => {
        setEpisode(response.data.results);
      })
      .catch((e) => console.log("error"));
  }, []);
  return [episode];
}

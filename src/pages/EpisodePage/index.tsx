import React from "react";
import Episode from "../../components/Episode";
import { EpisodePageProps } from "../../types/EpisodeType";
function EpisodePage({ episode }: EpisodePageProps) {
  return (
    <div>
      {episode.episodes.results &&
        episode.episodes.results.map((episodedata: any) => (
          <Episode key={episodedata.id} episodedata={episodedata} />
        ))}
    </div>
  );
}

export default EpisodePage;

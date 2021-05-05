import React from "react";
import Episode from "../../components/Episode";
import { EpisodePageProps } from "../../types/EpisodeType";
function EpisodePage({ episode }: EpisodePageProps) {
  return (
    <div>
      {episode &&
        episode.map((episodedata) => (
          <Episode key={episodedata.id} episodedata={episodedata} />
        ))}
    </div>
  );
}

export default EpisodePage;

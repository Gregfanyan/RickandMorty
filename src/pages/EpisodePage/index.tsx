import React from "react";
import Episode from "../../components/Episode";

function EpisodePage({ episode }: any) {
  return (
    <div>
      {episode &&
        episode.map((episodedata: any) => (
          <Episode key={episodedata.id} episodedata={episodedata} />
        ))}
    </div>
  );
}

export default EpisodePage;

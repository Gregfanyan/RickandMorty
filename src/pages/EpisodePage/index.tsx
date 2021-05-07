import React from "react";

import * as S from "./styles";
import Episode from "../../components/Episode";
import { EpisodePageProps } from "../../types/EpisodeType";

function EpisodePage({ episode }: EpisodePageProps) {
  return (
    <S.EpisodeSection>
      {episode &&
        episode.episodes &&
        episode.episodes.results &&
        episode.episodes.results.map((episodedata: any) => (
          <Episode key={episodedata.id} episodedata={episodedata} />
        ))}
    </S.EpisodeSection>
  );
}

export default EpisodePage;

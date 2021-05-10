import React from "react";

import * as S from "./styles";
import Episode from "../../components/Episode";
import { Loading } from "../CharacterPage/styles";
import { EpisodePageProps, EpisodeType } from "../../types/EpisodeType";
function EpisodePage({ episode, loading }: EpisodePageProps) {
  return (
    <>
      {loading === false ? (
        <S.EpisodeSection>
          {episode &&
            episode.map((episodedata: EpisodeType) => (
              <Episode key={episodedata.id} episodedata={episodedata} />
            ))}
        </S.EpisodeSection>
      ) : (
        <Loading>
          <i className="fas fa-spinner fa-5x"></i>
        </Loading>
      )}
    </>
  );
}

export default EpisodePage;

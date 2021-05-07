import React from "react";

import { EpisodeProps } from "../../types/EpisodeType";
import * as S from "./styles";

function Episode({ episodedata }: EpisodeProps) {
  const { name, air_date, episode, id } = episodedata;
  return (
    <S.Wrapper>
      <S.Section>
        <S.LinkElem to={`/episodeid/${id}`}>
          <h2>{name}</h2>
          <div>{episode}</div>
          <div>{air_date}</div>
        </S.LinkElem>
      </S.Section>
    </S.Wrapper>
  );
}

export default Episode;

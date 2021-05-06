export type EpisodeType = {
  air_date: string;
  name: string;
  episode: string;
  id: number;
};

export type EpisodePageProps = {
  episode: EpisodeType[];
};

export type EpisodeProps = {
  episodedata: EpisodeType;
};

export type SingleEpisodeProps = {
  episodeData: EpisodeType[] | any;
};


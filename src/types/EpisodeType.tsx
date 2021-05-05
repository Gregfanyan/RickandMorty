export type EpisodeType = {
  air_date: any;
  name: any;
  episode: any;
  id: any;
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


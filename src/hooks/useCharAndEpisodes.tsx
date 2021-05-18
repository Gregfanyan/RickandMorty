import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { dataProps } from "../types/EpisodeType";

export const DATA_QUERY = gql`
  query {
    characters {
      results {
        name
        id
        status
        image
        location {
          name
        }
        origin {
          name
        }
        episode {
          episode
        }
      }
    }
    episodes {
      results {
        air_date
        name
        episode
        id
        characters {
          id
          name
          image
          status
          location {
            name
          }
          origin {
            name
          }
        }
      }
    }
  }
`;

const useCharAndEpisodes: Function = (): dataProps => {
  const { loading, error, data } = useQuery(DATA_QUERY);

  return { data, loading, error };
};

export default useCharAndEpisodes;

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const DATA_QUERY = gql`
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

const useCharAndEpisodes: Function = (): {} => {
  const { loading, error, data } = useQuery(DATA_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Error</p>;
  }

  return { data, loading };
};

export default useCharAndEpisodes;

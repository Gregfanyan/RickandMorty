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
      }
    }
    episodes {
      results {
        air_date
        name
        episode
        id
      }
    }
  }
`;

const useCharAndEpisodes = () => {

  const { loading, error, data } = useQuery(DATA_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Error</p>;
  }

  return data;
};

export default useCharAndEpisodes;

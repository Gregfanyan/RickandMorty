import React, { useState, useEffect } from "react";
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
        }
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

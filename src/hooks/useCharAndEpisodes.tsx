import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import localforage from "localforage";

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
        }
      }
    }
  }
`;

const useCharAndEpisodes = () => {
  const [persistedData, setPersistedData] = useState<any>([]);
  const { loading, error, data } = useQuery(DATA_QUERY);

  useEffect(() => {
    localforage.setItem("value", data).then(() => {
      setPersistedData(data);
    });
  }, [data]);

  useEffect(() => {
    localforage.getItem("value").then((val) => {
      setPersistedData(val);
    });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Error</p>;
  }

  return persistedData;
};

export default useCharAndEpisodes;

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchCharacters } from "../redux/actions/charAndEpsiode";

function useData() {
  const charAndEpisodeData = useSelector(
    (state: any) => state.data.charAndEpisode
  );
  const dispatch = useDispatch();
  const [data, setCharAndEpisode] = useState([]);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  useEffect(() => {
    setCharAndEpisode(charAndEpisodeData);
  }, [charAndEpisodeData]);
  console.log("charAndEpisodeData", charAndEpisodeData);
  console.log("data from hooks", data);
  return { data };
}

export default useData;

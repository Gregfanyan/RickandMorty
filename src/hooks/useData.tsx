import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchCharacters } from "../redux/actions/charAction";

function useChar() {
  const chars = useSelector((state: any) => state.data.charAndEpisode);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  useEffect(() => {
    setData(chars);
  }, [chars]);

  return [data];
}

export default useChar;

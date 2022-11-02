import { useEffect, useState } from "react";
import getHighScores from "../api/getHighScores";

/**
 * React hook that fetchs the data from server
 * @returns 
 */
export default function useAllHighScores() {
  const [allScores, setAllScores] = useState([]);

  // only run once
  useEffect(() => {
    console.log('test')
    /**
     * Fetch all score data
     */
    async function fetchData() {
      try {
        const data = await getHighScores();
        console.log("success");
        console.log(data);
        setAllScores(data.data.payload);
      } catch (e) {
        console.log(e);
      }
    }

    // call method
    fetchData();
  }, []);

  return {
    allScores,
  };
}

import axios from "axios";
import { API_URL } from "../constants";

/**
 * Make api request for all the users' scores
 * @returns
 */
export default function editHighScore(id, username, score) {
  const url = API_URL + "/change-score";
  return axios.put(url, {
    _id: id, username:username, score:score
  });
}
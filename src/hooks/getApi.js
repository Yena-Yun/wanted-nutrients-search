import axios from "axios";

const BASE_URL = "https://nutri-search-autocomplete.herokuapp.com/data";

export const getApi = () => {
  return axios.get(BASE_URL);
};

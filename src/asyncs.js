import axios from "axios";

axios.defaults.baseURL = "https://api.giphy.com/v1/gifs/trending";
const fetchArticles = async (query) => {
  const APIKey = "k720JKNzRyqB6cPl4TvHnK3qjy5egGa4";
  const response = await axios.get(`?api_key=${APIKey}&q=${query}&limit=5`);
  return response;
};

export default fetchArticles;

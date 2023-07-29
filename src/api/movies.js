import axios from 'axios';
const API_Key = 'b9156ae71cf003d512863748b1da91bf';
const URL = 'https://api.themoviedb.org/3';
export async function fetchData(page = 1) {
  const response = await axios.get(
    `${URL}/trending/movie/day?api_key=${API_Key}&language=en-US&page=${page}`
  );
  console.log(response.data);
}
import axios from 'axios';

const movieData = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: { api_key: 'b9156ae71cf003d512863748b1da91bf' }
});

const defaultImg = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

const popular = async () => {
  const response = await movieData
    .get('trending/movie/week')
    .then(({ data: { results } }) => results);
  
  return response.map((movie) => ({
    title: movie.title,
    id: movie.id,
    poster: movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : defaultImg,
  }))
};

const search = async (query) => {
  const response = await movieData
    .get('search/movie', { params: {query: query}})
    .then(({ data: { results } }) => results);
  
  return response.map((movie) => ({
    title: movie.title,
    id: movie.id,
    poster: movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : defaultImg,
  }))
};

const movieDetails = async (id) => {
  const response = await movieData
    .get(`movie/${id}`)
    .then(({ data }) => ({
      title: data.title,
      id: data.id,
      vote: data.vote_average,
      overview: data.overview,
      genres: data.genres,
      poster: data.poster_path ? `https://image.tmdb.org/t/p/w300${data.poster_path}` : defaultImg,
    }));
  console.log(response)
  
  return response;
};


const credits = async (id) => {
  const response = await movieData
    .get(`movie/${id}/credits`)
    .then(({data}) => data.cast);
  
  return response.map((actor) => ({
    id: actor.id,
    name: actor.name,
    character: actor.character,
    photo: actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : defaultImg,
  }))
};

const reviews = async (id) => {
  const response = await movieData
    .get(`movie/${id}/reviews`)
    .then(({data}) => data.results);
  
  return response.map((review) => ({
    id: review.id,
    author: review.author,
    content: review.content,
  }))
};

const API = { popular, search, movieDetails, credits, reviews };
export default API;
import axios from 'axios';

const movieData = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: { api_key: 'b9156ae71cf003d512863748b1da91bf' }
});

export const popular = async () => {
  const response = await movieData
    .get('trending/movie/week')
    .then(({ data: { results } }) => results);
  
  return response.map((movie) => ({
    title: movie.title,
    id: movie.id,
  }))
};

export const search = async (query) => {
  const response = await movieData
    .get('search/movie', { params: {query: query}})
    .then(({ data: { results } }) => results);
  
  return response.map((movie) => ({
    title: movie.title,
    id: movie.id,
  }))
};

export const movieDetails = async (id) => {
  const response = await movieData
    .get(`movie/${id}`)
    .then(({ data }) => ({
      title: data.title,
      id: data.id,
      vote: data.vote_average,
      overview: data.overview,
      genres: data.genres,
      
    }));
  
  return response;
};


export const credits = async (id) => {
  const response = await movieData
    .get(`movie/${id}/credits`)
    .then(({data}) => data.cast);
  
  console.log(response)
  
  return response.map((actor) => ({
    id: actor.id,
    name: actor.name,
    character: actor.character,
  }))
};

export const reviews = async (id) => {
  const response = await movieData
    .get(`movie/${id}/reviews`)
    .then(({data}) => data.results);
  
  console.log(response)
  
  return response.map((review) => ({
    id: review.id,
    author: review.author,
    content: review.content,
  }))
};
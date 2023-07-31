import { GenreType, Genres, ImgContainer, MovieDetailsContainer, MovieTitle, Overview } from "./MovieDetailsItem.styled";
import PropTypes from 'prop-types';

export default function MovieDetailsItem({details}) {
  if (details === {details: null}) return
  const { title, vote, overview, genres, poster } = details;
  const genresMovie = genres.map((genre) => {
    return <GenreType key={genre.id}>{genre.name} </GenreType>  
  })

  return (
    <MovieDetailsContainer>
      <ImgContainer>
        <img src={poster} alt={title} />
      </ImgContainer>
      <div>
        <MovieTitle>{title}</MovieTitle>
        <p>User Score: {vote}</p>
        <Overview>Overview</Overview>
        <p>{overview}</p>
        {genres.length !==0 && (
          <>
            <Genres>Genres</Genres>
            <p>{genresMovie}</p>
          </>
        )}
      </div>
    </MovieDetailsContainer>
  );
}

MovieDetailsItem.propTypes = {
  details: PropTypes.shape({
      vote: PropTypes.number.isRequired,
      overview: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};
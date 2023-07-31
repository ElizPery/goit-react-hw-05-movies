import { GenreType, Genres, ImgContainer, MovieDetailsContainer, MovieTitle, Overview } from "./MovieDetailsItem.styled";

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
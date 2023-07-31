export default function MovieDetailsItem({details}) {
  if (details === {details: null}) return
  const { title, vote, overview, genres, poster } = details;
  const genresMovie = genres.map((genre) => {
      return <span key={genre.id}>{genre.name}</span>
  })

  return (
    <div>
      <img src={poster} alt={title}/>
      <h1>{title}</h1>
      <p>User Score: {vote}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genresMovie}</p>
    </div>
  );
}
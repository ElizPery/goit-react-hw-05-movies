import API from "api/movies";
import { useState, useEffect, useCallback} from "react";
import { useParams } from "react-router-dom";
import { ActorInfo, ActorName, ActorPhoto, CastContainer, CastItem, CastList, NoCast, NoCastItem } from "./Cast.styled";
import Loader from "components/Loader/Loader";
import Notiflix from "notiflix";

const Cast = () => {
    const { movieId } = useParams();
    const [movieCast, setMovieCast] = useState(null)
    
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

    const handleCastData = useCallback(async () => {
      if (movieId === undefined) return;
      
      setIsLoading(true);

      try {
        const response = await API.credits(movieId);
        setMovieCast(response);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }, [movieId]);

    useEffect(() => {
        handleCastData();
    }, [handleCastData]);

    return (
      <CastContainer>
        {isLoading && <Loader />}
        {isError &&
          Notiflix.Notify.failure(
            'Something went wrong, please try another query'
          )}
        {!isLoading && (
          <CastList>
            {movieCast !== null &&
              movieCast.map(actor => {
                return (
                  <CastItem key={actor.id}>
                    <ActorPhoto src={actor.photo} alt={actor.name} />
                    <ActorInfo>
                      <ActorName>{actor.name}</ActorName>
                      <p>Character: {actor.character}</p>
                    </ActorInfo>
                  </CastItem>
                );
              })}
            {movieCast !== null && movieCast.length === 0 && (
              <NoCastItem>
                <NoCast>No crew found</NoCast>
              </NoCastItem>
            )}
          </CastList>
        )}
      </CastContainer>
    );
}

export default Cast;
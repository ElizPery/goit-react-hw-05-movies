import API from "api/movies";
import { useState, useEffect, useCallback, useRef } from "react";
import { useParams } from "react-router-dom";
import { ActorInfo, ActorName, ActorPhoto, CastContainer, CastItem, CastList, NoCast, NoCastItem } from "./Cast.styled";
import Loader from "components/Loader/Loader";

const Cast = () => {
    const { movieId } = useParams();
    const [movieCast, setMovieCast] = useState(null)
    const isLoading = useRef(false);

    const handleCastData = useCallback(async () => {
        if (movieId === undefined) return;
        isLoading.current = true;
        const response = await API.credits(movieId);
        isLoading.current = false;

        setMovieCast(response);
    }, [movieId]);

    useEffect(() => {
        handleCastData();
    }, [handleCastData]);

    return (
      <CastContainer>
        {isLoading.current && <Loader />}
        {!isLoading.current && (
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
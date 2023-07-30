import { credits } from "api/movies";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

export const Cast = () => {
    const { movieId } = useParams();
    const [movieCast, setMovieCast] = useState(null)

    const handleCastData = useCallback(async () => {
        if (movieId === undefined) return;
        const response = await credits(movieId);

        setMovieCast(response);
    }, [movieId]);

    useEffect(() => {
        handleCastData();
    }, [handleCastData]);



    return (<ul>{movieCast !== null &&
        movieCast.map((actor) => {
            return <li key={actor.id}>
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
            </li>
        })
    }
    </ul>)
}
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_IMAGE_URL, getCastInfo } from 'servises/Api';
import Error from 'components/Error';
import Loader from 'components/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [castInfo, setCastInfo] = useState(null);

  useEffect(() => {
    const fetchCastInfo = async () => {
      if (!movieId) return;

      try {
        setIsLoading(true);

        const castDetails = await getCastInfo(movieId);

        setCastInfo(castDetails);
        console.log('castDetails', castDetails);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCastInfo();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error !== null && <Error error={error} />}
      {castInfo !== null && (
        <div>
          <h3>Cast</h3>
          <ul>
            {castInfo.cast.map(actor => (
              <li key={actor.id}>
                <img
                  src={`${BASE_IMAGE_URL}w185${actor.profile_path}`}
                  alt="actor"
                />
                <p>
                  <b>{actor.name}</b>
                </p>
                <p>Caracter: {actor.character}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Cast;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_IMAGE_URL, getCastInfo } from 'servises/Api';
import Error from 'components/Error';
import Loader from 'components/Loader';
import defaultFemaleImage from '../../img/default_female.png';
import defaultMaleImage from '../../img/default_male.png';

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
            {castInfo.cast.map(actor => {
              const actorAvatar = actor.profile_path
                ? `${BASE_IMAGE_URL}w185${actor.profile_path}`
                : // : 'https://www.scifi-movies.com/images/site/en/affiche_nondisponible.jpg';
                actor.gender === 1
                ? defaultFemaleImage
                : defaultMaleImage;

              return (
                <li key={actor.id}>
                  {/* {actor.profile_path ? ( */}
                  <img src={actorAvatar} alt="actor" />
                  {/* ) : (
                  <img
                    src={
                      actor.gender === 1
                        ? '../../img/default_female.png'
                        : '../../img/default_male.png'
                    }
                    alt="default-actor-avatar" */}
                  {/* />
                )} */}
                  {/* {actor.profile_path ? (
                  <img
                    src={`${BASE_IMAGE_URL}w185${actor.profile_path}`}
                    alt="actor"
                  />
                ) : (
                  <img
                    src={
                      actor.gender === 1
                        ? '../../img/default_female.png'
                        : '../../img/default_male.png'
                    }
                    alt="default avatar"
                    width={185}
                  />
                )} */}
                  <p>
                    <b>{actor.name}</b>
                  </p>
                  <p>Caracter: {actor.character}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Cast;

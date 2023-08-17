import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_IMAGE_URL, getCastInfo } from 'servises/Api';
import Error from 'components/Error';
import Loader from 'components/Loader';
import defaultFemaleImage from '../../img/default_female.png';
import defaultMaleImage from '../../img/default_male.png';
import { GridContainer, GridItem } from './Cast.styled';

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
          <GridContainer>
            {castInfo.cast.map(actor => {
              const actorAvatar = actor.profile_path
                ? `${BASE_IMAGE_URL}w185${actor.profile_path}`
                : actor.gender === 1
                ? defaultFemaleImage
                : defaultMaleImage;

              return (
                <GridItem key={actor.id}>
                  <img src={actorAvatar} alt="actor" />
                  <p>
                    <b>{actor.name}</b>
                  </p>
                  <p>Caracter: {actor.character}</p>
                </GridItem>
              );
            })}
          </GridContainer>
        </div>
      )}
    </>
  );
};

export default Cast;

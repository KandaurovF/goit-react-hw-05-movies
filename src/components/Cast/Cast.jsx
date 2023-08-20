import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_IMAGE_URL, getCastInfo } from 'servises/Api';
import Error from 'components/Error';
import Loader from 'components/Loader';
import defaultFemaleImage from '../../img/default_female.png';
import defaultMaleImage from '../../img/default_male.png';
import {
  ActorImage,
  ActorInfo,
  CastWrapper,
  GridContainer,
  GridItem,
} from './Cast.styled';

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
        <CastWrapper>
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
                  <ActorImage>
                    <img src={actorAvatar} alt="actor" />
                  </ActorImage>
                  <ActorInfo>
                    <p>
                      <b>{actor.name}</b>
                    </p>
                    <p>Caracter: {actor.character}</p>
                  </ActorInfo>
                </GridItem>
              );
            })}
          </GridContainer>
        </CastWrapper>
      )}
    </>
  );
};

export default Cast;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewInfo } from 'servises/Api';
import Error from 'components/Error';
import Loader from 'components/Loader';
import { format } from 'date-fns';
import { ReviewWrapper } from './Review.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviewInfo, setReviewInfo] = useState(null);

  useEffect(() => {
    const fetchRewiews = async () => {
      if (!movieId) return;

      try {
        setIsLoading(true);

        const reviewDetails = await getReviewInfo(movieId);
        setReviewInfo(reviewDetails);
        console.log('reviewDetails', reviewDetails);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRewiews();
  }, [movieId]);

  const showReviews =
    reviewInfo !== null &&
    Array.isArray(reviewInfo.results) &&
    reviewInfo.results.length > 0;

  return (
    <ReviewWrapper>
      {isLoading && <Loader />}
      {error !== null && <Error error={error} />}
      <h3>Reviews</h3>
      {showReviews ? (
        <ul>
          {reviewInfo.results.map(result => (
            <li key={result.id}>
              <p>
                <b>{result.author}</b>
              </p>
              <p>{result.content}</p>
              <p>{format(Date.parse(result.updated_at), 'dd MMMM yyyy')}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie...</p>
      )}
    </ReviewWrapper>
  );
};

export default Reviews;

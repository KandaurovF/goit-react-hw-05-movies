import Error from 'components/Error';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewInfo } from 'servises/Api';

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

  return (
    <div>
      {isLoading && <loader />}
      {error !== null && <Error error={error} />}
      <h3>Reviews</h3>
      {reviewInfo !== null && (
        <ul>
          {reviewInfo.results.map(result => (
            <li key={result.id}>
              <p>
                <b>{result.author}</b>
              </p>
              <p>{result.content}</p>
              <p>{result.updated_at}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;

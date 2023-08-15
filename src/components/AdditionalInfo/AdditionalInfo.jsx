import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';

const AdditionalInfo = () => {
  return (
    <>
      <div>
        <h2> Additional information</h2>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </>
  );
};

export default AdditionalInfo;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
import Button from 'components/Button';
import {
  AdditionalInfoWrapper,
  LinksWrapper,
  StyledLink,
} from './AdditionalInfo.styled';

const AdditionalInfo = () => {
  return (
    <>
      <AdditionalInfoWrapper>
        <h2> Additional information</h2>
        <LinksWrapper>
          <li>
            <StyledLink to="cast">
              <Button type="button">Cast</Button>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="reviews">
              <Button type="button">Reviews</Button>
            </StyledLink>
          </li>
        </LinksWrapper>
      </AdditionalInfoWrapper>
      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </>
  );
};

export default AdditionalInfo;

import styled from 'styled-components';

export const MovieInfoWrapper = styled.div`
  border-bottom: 1px solid #000000;

  @media (min-width: 768px) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${props => props.backdropUrl});
    background-size: cover;
    background-position: center;

    padding: 20px;
    color: white;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;

  img {
    max-width: 100%;
    border-radius: 10px;

    @media (max-width: 767px) {
      margin: 0 auto;
      display: block;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: auto 1fr;
    column-gap: 20px;
    align-items: center;
  }
`;

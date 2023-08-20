import styled from 'styled-components';

export const CastWrapper = styled.div`
  padding: 0 20px;
`;

export const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 20px;
  margin-top: 20px;
  list-style: none;
  padding: 0;
`;

export const GridItem = styled.li`
  text-align: center;
`;

export const ActorImage = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 5px;
  }
`;

export const ActorInfo = styled.div`
  margin-top: 5px;
`;

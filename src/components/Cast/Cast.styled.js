import styled from 'styled-components';

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

  img {
    max-width: 100%;
    height: auto;
  }
`;

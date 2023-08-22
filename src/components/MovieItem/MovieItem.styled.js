import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const GridItem = styled.li`
  text-align: center;
  border-radius: 5px;
  border: 1px solid #000000;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.75);

  img {
    max-width: 100%;
    height: auto;
  }

  p {
    color: white;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

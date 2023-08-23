import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const GridItem = styled.li`
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 10px 0 rgba(255, 215, 0, 0.3);

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

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import background from '../../img/wallpaperbetter.com_2560x1440 (1).jpg';

export const Wrapper = styled.main`
  background-color: gray;
  background-image: url('${background}');
  background-position: center;
  background-size: auto;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  margin-left: 20px;
  margin-bottom: 1em;
`;

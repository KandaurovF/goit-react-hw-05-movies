import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AdditionalInfoWrapper = styled.div`
  padding: 0 20px;
  color: white;
`;

export const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  gap: 20px;
  padding-bottom: 20px;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  text-decoration: none;
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  /* max-width: 1200px; */
  margin: 0 auto;
  /* padding: 0 16px; */
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 8px 20px;
  background: linear-gradient(to bottom, rgb(3, 37, 65), rgba(3, 37, 65, 0.7));
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Logo = styled.h3`
  text-transform: uppercase;
  font-weight: 500;
  color: #fff;
  margin: 0;
`;

export const SecondLogoColor = styled.span`
  color: #ff0000;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 10px;
  text-decoration: none;
   text-transform: uppercase;
  color: #fff;
  font-weight: 400;
  transition: all 0.3s;

  &.active {
       text-align: center;
    text-transform: uppercase;
     font-weight: 500;
    background-size: 120% auto;
    color: #B8860B;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.8);

`;

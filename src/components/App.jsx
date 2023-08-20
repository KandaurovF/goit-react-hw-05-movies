import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Container,
  Header,
  Logo,
  SecondLogoColor,
  StyledNavLink,
} from './App.styled';
import Loader from './Loader';

const Home = lazy(() => import('pages/Home'));
const SearchMovie = lazy(() => import('pages/SearchMovie/SearchMovie'));
const MovieDetail = lazy(() => import('pages/MovieDetail'));
const NotFound = lazy(() => import('pages/NotFound'));

export const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          Infinity<SecondLogoColor>Flix</SecondLogoColor>
        </Logo>
        <nav>
          <StyledNavLink to={'/'}>Home</StyledNavLink>
          <StyledNavLink to={'/movies'}>Movies</StyledNavLink>
        </nav>
      </Header>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<SearchMovie />} />
          <Route path="/movies/:movieId/*" element={<MovieDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

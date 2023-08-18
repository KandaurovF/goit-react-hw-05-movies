import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container, Header, StyledNavLink } from './App.styled';
import Loader from './Loader';
// import Home from 'pages/Home';
// import SearchMovie from 'pages/SearchMovie/SearchMovie';
// import MovieDetail from 'pages/MovieDetail';
// import NotFound from 'pages/NotFound';

const Home = lazy(() => import('pages/Home'));
const SearchMovie = lazy(() => import('pages/SearchMovie/SearchMovie'));
const MovieDetail = lazy(() => import('pages/MovieDetail'));
const NotFound = lazy(() => import('pages/NotFound'));

export const App = () => {
  return (
    <Container>
      <Header>
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

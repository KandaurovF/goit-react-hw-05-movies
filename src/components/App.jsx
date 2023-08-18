import { Route, Routes } from 'react-router-dom';
import { Container, Header, StyledNavLink } from './App.styled';
import Home from 'pages/Home';
import MovieDetail from 'pages/MovieDetail';
import SearchMovie from 'pages/SearchMovie/SearchMovie';
import NotFound from 'pages/NotFound';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledNavLink to={'/'}>Home</StyledNavLink>
          <StyledNavLink to={'/movies'}>Movies</StyledNavLink>
        </nav>
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<SearchMovie />} />
        <Route path="/movies/:movieId/*" element={<MovieDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};

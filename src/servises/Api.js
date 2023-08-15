import axios from 'axios';

export const BASE_IMAGE_URL = 'http://image.tmdb.org/t/p/';

const API_KEY = '2a40eee025ae191ba82a449107daf37f';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrandingMovies = async () => {
  try {
    const response = await axios.get('/trending/movie/day', {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });

    return response.data.results;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getMovieById = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getCastInfo = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}/credits`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getReviewInfo = async movieId => {
  try {
    const response = await axios.get(`movie/${movieId}/reviews`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

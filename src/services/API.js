import axios from 'axios';
const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2EwYWRhY2FmZTQ5M2I0ZjJhOWFlNGZmY2EyODMzYyIsIm5iZiI6MTczMjM2MTA2NC41Nzk3ODk5LCJzdWIiOiI2NzQxYjc3ZTRiMTViOGFlMzFiMDE2NTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.0mj7JsU_RZkn_UkXa1RxBOOrurOYWHx5YomfyhCYJfQ';
const BASE_URL = 'https://api.themoviedb.org/3';
const ENDPOINT = '/trending/movie/day';

export const fetchData = async () => {
  const { data } = await axios.get(`${BASE_URL}${ENDPOINT}`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  return data;
};
export const fetchDataById = async id => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  return data;
};
export const fetchCastByMovieId = async id => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}/credits`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });

  return data.cast;
};
export const fetchReviewsByMovieId = async id => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}/reviews`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });

  return data.results;
};
export const fetchMovieByQuery = async query => {
  const { data } = await axios.get(`${BASE_URL}/search/movie`, {
    params: { query },
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  return data.results;
};

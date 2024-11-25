import { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { fetchData } from '../../services/API';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const { results } = await fetchData();
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <h1>Tranding today</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;

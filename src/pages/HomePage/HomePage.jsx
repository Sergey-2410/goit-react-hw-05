import { useState, useEffect } from 'react';
import s from './HomePage.module.css';
import { fetchData } from '../../services/API';
import { Link } from 'react-router-dom';
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
      Tranding today
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id.toString()}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

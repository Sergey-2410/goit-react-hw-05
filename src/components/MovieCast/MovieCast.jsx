import { useParams } from 'react-router-dom';
import s from './MovieCast.module.css';
import { useState, useEffect } from 'react';
import { fetchCastByMovieId } from '../../services/API';
const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCast] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCastByMovieId(movieId);
        const roles = data.filter(cast => cast.order < 10);
        setCast(roles);
      } catch (error) {
        console.error('Error in MovieCast:', error.message);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div>
      <ul>
        {casts.map(cast => (
          <li key={cast.id}>
            <img src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`} />
            <p>{cast.name}</p>
            <p>Character: {cast.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieCast;

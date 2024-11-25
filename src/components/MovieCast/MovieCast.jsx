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
        setCast(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);
  return (
    <div>
      <ul>
        {casts.map(cast => (
          <li key={cast.id}>{cast.genre_ids}</li>
        ))}
      </ul>
    </div>
  );
};
export default MovieCast;

import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import s from './MovieDetailsPage.module.css';
import { useState, useEffect, useRef } from 'react';
import { fetchDataById } from '../../services/API';
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackLink = useRef(location.state?.from || '/movies');
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchDataById(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);
  if (!movie) {
    return <h2>Loading data...</h2>;
  }

  return (
    <div>
      <Link to={goBackLink.current}>Go back</Link>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      <p>{movie.overview}</p>
      <nav className={s.nav}>
        Additional information
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;

import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import s from './MovieDetailsPage.module.css';
import { useState, useEffect, useRef, Suspense } from 'react';
import { fetchDataById } from '../../services/API';
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackLink = useRef(location.state?.from || '/');
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchDataById(movieId);
        setMovie(data);
      } catch (error) {
        console.error('Error in MovieDetailsPage:', error.message);
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
      <div className={s.boxAboutMovie}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className={s.img}
        />
        <div className={s.description}>
          <h2>{movie.title}</h2>
          <div>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
          </div>
          <div>
            <h2>Status</h2>
            <p>{movie.status}</p>
          </div>
        </div>
      </div>
      <nav className={s.nav}>
        Additional information
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      <Suspense fallback={<h2>Loading details</h2>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;

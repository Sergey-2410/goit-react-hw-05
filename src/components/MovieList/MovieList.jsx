import { Link } from 'react-router-dom';
const MovieList = ({ movies, location }) => {
  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id.toString()}`}
              state={{ from: location }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

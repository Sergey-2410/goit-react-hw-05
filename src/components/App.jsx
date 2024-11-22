import '../index.css';
import MovieCast from './MovieCast/MovieCast';
import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
import MovieReviews from './MovieReviews/MovieReviews';
const App = () => {
  return (
    <div>
      <MovieCast />
      <MovieDetailsPage />
      <MovieReviews />
    </div>
  );
};

export default App;

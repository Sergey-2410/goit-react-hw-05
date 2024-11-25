import { Field, Formik, Form } from 'formik';
import { useEffect, useState } from 'react';
import { fetchMovieByQuery } from '../../services/API';
import MovieList from '../../components/MovieList/MovieList';
import { useNavigate } from 'react-router-dom';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const handleSubmit = values => {
    setQuery(values.query);
    navigate(`?query=${values.query}`);
  };
  const initialValue = {
    query: '',
  };
  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      const data = await fetchMovieByQuery(query);
      setMovies(data);
    };
    getData();
  }, [query]);
  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={initialValue}>
        <Form>
          <Field name="query" placeholder="Search movies" />
          <button type="submit">search</button>
        </Form>
      </Formik>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;

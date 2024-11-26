import { Field, Formik, Form } from 'formik';
import { useEffect, useState } from 'react';
import { fetchMovieByQuery } from '../../services/API';
import MovieList from '../../components/MovieList/MovieList';
import { useLocation, useSearchParams } from 'react-router-dom';
import s from './MoviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const location = useLocation();

  const handleSubmit = values => {
    setSearchParams({ query: values.query });
  };

  const initialValue = {
    query: query,
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
        <Form className={s.form}>
          <Field className={s.input} name="query" placeholder="Search movies" />
          <button className={s.btnSubmit} type="submit">
            search
          </button>
        </Form>
      </Formik>
      <MovieList movies={movies} location={location} />
    </div>
  );
};

export default MoviesPage;

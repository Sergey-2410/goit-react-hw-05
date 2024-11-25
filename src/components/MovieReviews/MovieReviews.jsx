import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsByMovieId } from '../../services/API';
const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchReviewsByMovieId(movieId);
        console.log(data);

        setReviews(data);
      } catch (error) {
        console.error('Error in MovieReview:', error.message);
      }
    };
    getData();
  }, [movieId]);
  if (reviews.length === 0) {
    return <p>We do not have any reviews for this movie</p>;
  }
  return (
    <div>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h2>{review.author}</h2>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieReviews;

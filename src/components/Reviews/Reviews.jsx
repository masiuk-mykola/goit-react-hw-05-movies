import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReview } from 'services/movieAPI';

export const Reviews = () => {
  const { id } = useParams();
  const [movieReview, setMovieReview] = useState(null);

  useEffect(() => {
    getMovieReview(id).then(setMovieReview);
  }, [id]);

  if (movieReview === null) {
    return;
  }

  return (
    <div>
      <h3>Movie review</h3>
      <ul>
        {movieReview.map(({ author, content }) => {
          return (
            <li key={author}>
              <b>{author}</b>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

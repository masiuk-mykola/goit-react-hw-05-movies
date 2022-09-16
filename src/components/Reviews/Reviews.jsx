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

  console.log(movieReview);
  return (
    <div>
      <h3>Movie review</h3>
      <ul>
        {movieReview.map(item => {
          return (
            <li key={item.author}>
              <b>{item.author}</b>
              <p>{item.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

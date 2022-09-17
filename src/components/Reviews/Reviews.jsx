import { Box } from 'components/Box';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReview } from 'services/movieAPI';

const Reviews = () => {
  const { id } = useParams();
  const [movieReview, setMovieReview] = useState(null);

  useEffect(() => {
    getMovieReview(id).then(setMovieReview);
  }, [id]);

  if (movieReview === null) {
    return;
  }

  return (
    <>
      {movieReview.length !== 0 ? (
        <div>
          <h3>Movie review</h3>
          <ul>
            {movieReview.map(({ author, content, id }) => {
              return (
                <Box as="li" mb={3} key={id}>
                  <b>Author: {author}</b>
                  <Box as="p" mt={2}>
                    {content}
                  </Box>
                </Box>
              );
            })}
          </ul>
        </div>
      ) : (
        <h3>There is no review</h3>
      )}
    </>
  );
};

export default Reviews;

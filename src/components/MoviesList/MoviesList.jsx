import { Box } from 'components/Box';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMoviesList } from 'services/movieAPI';

export const MoviesList = () => {
  const [movieList, setmovieList] = useState(null);

  useEffect(() => {
    getMoviesList().then(setmovieList);
  }, []);

  return (
    <>
      {movieList && (
        <Box as="ul" m={0} pl={3}>
          {movieList.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`${id}`}>{title}</Link>
              </li>
            );
          })}
        </Box>
      )}
    </>
  );
};

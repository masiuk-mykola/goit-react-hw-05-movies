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
        <ul>
          {movieList.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

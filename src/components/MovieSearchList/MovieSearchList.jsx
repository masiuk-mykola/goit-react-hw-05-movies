import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSearchMovie } from 'services/movieAPI';

export const MovieSearchList = ({ query }) => {
  const [movieList, setmovieList] = useState(null);

  useEffect(() => {
    if (query === '') {
      return;
    }
    getSearchMovie(query).then(setmovieList);
  }, [query]);

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

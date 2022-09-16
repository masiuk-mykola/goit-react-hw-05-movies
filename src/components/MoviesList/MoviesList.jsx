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
          {movieList.map(item => {
            return (
              <li key={item.id}>
                <Link to={`${item.id}`}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

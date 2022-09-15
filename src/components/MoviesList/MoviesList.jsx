import { useState, useEffect } from 'react';
import { getMoviesList } from 'services/movieAPI';
import { MovieListItem } from './MovieListItem/MovieListItem';

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
            return <MovieListItem key={item.id} item={item} />;
          })}
        </ul>
      )}
    </>
  );
};

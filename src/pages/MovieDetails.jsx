import { Box } from 'components/Box';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieInfo } from 'services/movieAPI';

export const MovieDetails = () => {
  const [movieInfo, setmovieInfo] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getMovieInfo(id).then(setmovieInfo);
  }, [id]);

  if (movieInfo === null) {
    return;
  }

  const {
    poster_path,
    original_title,
    vote_average,
    overview,
    release_date,
    genres,
  } = movieInfo;

  const genreList = genres.map(item => item.name).join(', ');

  let movieReleaseDate = release_date.split('').slice(0, 4).join('');
  if (release_date === '') {
    movieReleaseDate = `Unknown`;
  }

  return (
    <Box as="main" p={3}>
      <Link to="/home">Back</Link>
      <Box display="flex" gridGap="20px">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={`${original_title}`}
          height={600}
        />
        <Box>
          <h2>
            {original_title} {movieReleaseDate}
          </h2>
          <p>
            User score: <span>{Math.round(vote_average * 10)}%</span>
          </p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <p>Genres</p>
          <p>{genreList}</p>
        </Box>
      </Box>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </Box>
  );
};

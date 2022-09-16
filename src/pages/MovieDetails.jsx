import { Box } from 'components/Box';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieInfo } from 'services/movieAPI';

export const MovieDetails = () => {
  const [movieInfo, setmovieInfo] = useState(null);

  const { id } = useParams();
  const location = useLocation();

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
    <Box as="main" pl={3} pt={0}>
      <Link
        to={
          location.pathname.includes('movies')
            ? `${location.state.from.pathname}${location.state.from.search}`
            : '/home'
        }
      >
        Back
      </Link>
      <Box display="flex" gridGap="20px" mt={3} mb={3} p={0}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={`${original_title}`}
          height={600}
        />
        <Box>
          <Box as="h2" mb={3}>
            {original_title} {movieReleaseDate}
          </Box>
          <Box as="p" mb={3}>
            User score: <span>{Math.round(vote_average * 10)}%</span>
          </Box>
          <Box as="h3" mb={3}>
            Overview
          </Box>
          <Box as="p" mb={3}>
            {overview}
          </Box>
          <Box as="p" mb={3}>
            Genres
          </Box>
          <p>{genreList}</p>
        </Box>
      </Box>

      <p>Additional information</p>
      <Box as="ul" p={0} m={0} mt={3}>
        <li>
          <Link to="cast" state={{ from: location.state?.from ?? '' }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location.state?.from ?? '' }}>
            Reviews
          </Link>
        </li>
      </Box>
      <Outlet />
    </Box>
  );
};

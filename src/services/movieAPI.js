import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const key = 'b580e55a4551b421271bf131dd03ab39';

export const getMoviesList = async () => {
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`;

  try {
    const movies = await axios.get(url);
    return movies.data.results;
  } catch (error) {
    console.log(error);
  }
};

// const getStartMovies = async () => {
//   const response = await fetch(
//     'https://api.themoviedb.org/3/trending/movie/day?api_key=b580e55a4551b421271bf131dd03ab39'
//   );
//   const movies = await response.json();
//   return movies;
// };

// getStartMovies().then(movies => console.log(movies));

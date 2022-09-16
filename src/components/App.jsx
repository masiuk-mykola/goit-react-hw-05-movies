import { Layout } from 'components/Layout/Layout';
import { MovieDetails } from 'pages/MovieDetails';
import { Movies } from 'pages/Movies';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="home/:id" element={<MovieDetails />} />

          <Route path="movies" element={<Movies />} />
        </Route>
      </Routes>
    </>
  );
};

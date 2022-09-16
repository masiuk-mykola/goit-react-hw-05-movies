import { Box } from 'components/Box';
import { MovieSearchList } from 'components/MovieSearchList/MovieSearchList';
import { useState } from 'react';

export const Movies = () => {
  const [inputValue, setInputSearch] = useState('');
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setInputSearch(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setQuery(inputValue);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <MovieSearchList query={query} />
    </Box>
  );
};

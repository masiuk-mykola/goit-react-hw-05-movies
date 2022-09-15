import { Link } from 'react-router-dom';

export const MovieListItem = ({ item }) => {
  return (
    <li>
      <Link>{item.title}</Link>
    </li>
  );
};

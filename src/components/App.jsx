import { getCards } from '../api/api';
import Cards from './Cards';
getCards();
export const App = () => {
  return <Cards />;
};

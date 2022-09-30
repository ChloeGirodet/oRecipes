import axios from 'axios';
import { FETCH_RECIPES, setRecipesList } from '../actions/recipes';

const recipesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      axios
        .get('http://localhost:3001/recipes')
        .then((res) => {
          store.dispatch(setRecipesList(res.data));
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    default:
      next(action);
  }
};

export default recipesMiddleware;

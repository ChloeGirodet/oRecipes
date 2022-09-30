export const FETCH_RECIPES = 'FETCH_RECIPES';
export const fetchRecipes = () => ({
  type: FETCH_RECIPES,
});

export const SET_RECIPES_LIST = 'SET_RECIPES_LIST';
export const setRecipesList = (recipes) => ({
  type: SET_RECIPES_LIST,
  payload: { recipes: recipes },
});

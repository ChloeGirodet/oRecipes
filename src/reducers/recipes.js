import { SET_RECIPES_LIST } from '../actions/recipes';

export const initialState = {
  list: [],
  loading: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_RECIPES_LIST:
      return {
        ...state,
        list: action.payload.recipes,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;

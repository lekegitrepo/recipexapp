import { actions } from '../actions/index.actions';

const { ADD_RECIPES } = actions;

const recipes = (state = [], actions) => {
  switch (actions.type) {
    case ADD_RECIPES:
      return [...state, actions.recipes];
    default:
      return state;
  }
};

export default recipes;

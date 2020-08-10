import { actions } from '../actions/index.actions';

const { ADD_RECIPES } = actions;

const recipe = (state = [], actions) => {
  switch (actions.type) {
    case ADD_RECIPES:
      return [...state, actions.recipe];
    default:
      return state;
  }
};

export default recipe;

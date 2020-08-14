import { actions } from '../actions/index.actions';

const { ADD_RECIPE } = actions;

const recipe = (state = [], actions) => {
  switch (actions.type) {
    case ADD_RECIPE:
      return [...state, actions.recipe];
    default:
      return state;
  }
};

export default recipe;

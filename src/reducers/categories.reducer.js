import { actions } from '../actions/index.actions';

const { ADD_CATEGORIES } = actions;

const categories = (state = [], actions) => {
  switch (actions.type) {
    case ADD_CATEGORIES:
      return [...actions.categories];
    default:
      return state;
  }
};

export default categories;
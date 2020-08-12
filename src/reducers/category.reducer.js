import { actions } from '../actions/index.actions';

const { ADD_CATEGORY } = actions;

const category = (state = [], actions) => {
  switch (actions.type) {
    case ADD_CATEGORY:
      return [...state, actions.category];
    default:
      return state;
  }
};

export default category;

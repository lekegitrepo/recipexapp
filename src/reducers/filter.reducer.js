import { actions } from '../actions/index.actions';

const { CHANGE_FILTER } = actions;

const filter = (state = 'All Categories', actions) => {
  switch (actions.type) {
    case CHANGE_FILTER:
      return actions.filter;
    default:
      return state;
  }
};

export default filter;

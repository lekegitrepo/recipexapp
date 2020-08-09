import { combineReducers } from 'redux';
import recipes from './recipes.reducer';
import categories from './categories.reducer';
import filter from './filter.reducer';

const rootReducer = combineReducers({
  recipes,
  categories,
  filter,
});

export default rootReducer;

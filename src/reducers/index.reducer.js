import { combineReducers } from 'redux';
import recipes from './recipes.reducer';
import recipe from './recipe.reducer';
import categories from './categories.reducer';
import filter from './filter.reducer';

const rootReducer = combineReducers({
  recipe,
  recipes,
  categories,
  filter,
});

export default rootReducer;

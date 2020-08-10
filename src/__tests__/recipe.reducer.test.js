import { addRecipes } from '../actions/index.actions';
import recipeReducer from '../reducers/recipes.reducer';

const recipes = [
  {
    name: 'Pizza',
    id: 3,
  },
  {
    name: 'Pounded Yam',
    id: 5,
  },
  {
    name: 'Fruit salad',
    id: 10,
  },
];

const updatedRecipes = [
  {
    name: 'Pizza',
    id: 3,
  },
  {
    name: 'Pounded Yam',
    id: 5,
  },
  {
    name: 'Fruit salad',
    id: 10,
  },
  {
    name: 'Juices',
    id: 7,
  },
];

describe('Category Reducer', () => {
  it('should return empty default state', () => {
    const newState = recipeReducer([], {});
    expect(newState).toEqual([]);
  });

  it('should return initial state if it specify', () => {
    const newState = recipeReducer(recipes, {});
    expect(newState).toEqual(recipes);
  });

  it('should return an updated state if it receives a valid type', () => {
    const action = addRecipes({name: 'Juices', id: 7});
    const newState = recipeReducer(recipes, action);
    expect(newState).toEqual(updatedRecipes);
  });
});

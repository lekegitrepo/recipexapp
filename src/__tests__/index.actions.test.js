import { addCategories, addRecipes, changeFilter } from '../actions/index.actions';

const recipes = [
  {
    name: 'Pizza',
    id: 3,
  },
  {
    name: 'Pounded Yam',
    id: 5,
  },
];

const categories = ['Beef', 'Fruit', 'Grains'];

describe('changeFilter', () => {
  it('should return type and a value containing the category', () => {
    const values = Object.values(changeFilter('Fish Soup'));

    expect(values).toEqual(['CHANGE_FILTER', 'Fish Soup']);
  });
});

describe('addCategories', () => {
  it('should return type and a value containing the array of new categories', () => {
    const values = Object.values(addCategories(categories));

    expect(values).toEqual(['ADD_CATEGORIES', categories]);
  });
});

describe('addRecipes', () => {
  it('should return type and a value containing the new recipe', () => {
    const values = Object.values(addRecipes(recipes));

    expect(values).toEqual(['ADD_RECIPES', recipes]);
  });
});


import { addCategory, addRecipes, changeFilter } from '../actions/index.actions';

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

const categories = ['Beef', 'Fruit', 'Grains'];

describe('changeFilter', () => {
  it('should return type and a value containing the category', () => {
    const values = Object.values(changeFilter('Fish Soup'));

    expect(values).toEqual(['CHANGE_FILTER', 'Fish Soup']);
  });
});

describe('addCategory', () => {
  it('should return type and a value containing the array of new categories', () => {
    const values = Object.values(addCategory(categories));

    expect(values).toEqual(['ADD_CATEGORY', categories]);
  });
});

describe('addRecipes', () => {
  it('should return type and a value containing the new recipe', () => {
    const values = Object.values(addRecipes(recipes));

    expect(values).toEqual(['ADD_RECIPES', recipes]);
  });
});


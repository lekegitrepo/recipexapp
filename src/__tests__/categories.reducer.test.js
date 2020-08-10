import { addCategories } from '../actions/index.actions';
import categories from '../reducers/categories.reducer';

describe('Reducer Category', () => {
  it('should return an empty array i.e. the default state', () => {
    const newState = categories(undefined, {});
    expect(newState).toEqual([]);
  });

  it('should return the initial state', () => {
    const initialState = ['Beef', 'Fruit', 'Grains', 'Meat'];
    const action = '';
    const newState = categories(initialState, action);
    expect(newState.length).toEqual(4);
  });

  it('should return length of updated state if it receives a valid type', () => {
    const initialState = ['Beef', 'Fruit', 'Grains', 'Meat'];
    const action = addCategories('Beverages');
    const newState = categories(initialState, action);
    expect(newState.length).toEqual(5);
  });

  it('should return array content of updated state if it receives a valid type', () => {
    const initialState = ['Beef', 'Fruit', 'Grains', 'Meat'];
    const action = addCategories('Beverages');
    const newState = categories(initialState, action);
    expect(newState).toEqual(['Beef', 'Fruit', 'Grains', 'Meat', 'Beverages']);
  });
});


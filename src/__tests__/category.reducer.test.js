import { addCategory } from '../actions/index.actions';
import category from '../reducers/category.reducer';

describe('Reducer Category', () => {
  it('should return an empty array i.e. the default state', () => {
    const newState = category(undefined, {});
    expect(newState).toEqual([]);
  });

  it('should return the initial state', () => {
    const initialState = ['Beef', 'Fruit', 'Grains', 'Meat'];
    const action = '';
    const newState = category(initialState, action);
    expect(newState.length).toEqual(4);
  });

  it('should return length of updated state if it receives a valid type', () => {
    const initialState = ['Beef', 'Fruit', 'Grains', 'Meat'];
    const action = addCategory('Beverages');
    const newState = category(initialState, action);
    expect(newState.length).toEqual(5);
  });

  it('should return array content of updated state if it receives a valid type', () => {
    const initialState = ['Beef', 'Fruit', 'Grains', 'Meat'];
    const action = addCategory('Beverages');
    const newState = category(initialState, action);
    expect(newState).toEqual(['Beef', 'Fruit', 'Grains', 'Meat', 'Beverages']);
  });
});


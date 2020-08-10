import { changeFilter } from '../actions/index.actions';
import filterReducer from '../reducers/filter.reducer';

describe('Reducer Category', () => {
  it('should return default state', () => {
    const newState = filterReducer(undefined, {});
    expect(newState).toEqual('All Categories');
  });

  it('should return a set state', () => {
    const newState = filterReducer('Fruits', {});
    expect(newState).toEqual('Fruits');
  });

  it('should return a filter state', () => {
    const categories = ['Vegetable', 'Fruit', 'Grain', 'Meat']
    categories['Fruit'] = ['Apple', 'Orange', 'Pineapple']
    const action = changeFilter(categories['Fruit']);
    const filterCategory = filterReducer([], action);
    expect(filterCategory).toEqual(['Apple', 'Orange', 'Pineapple']);
  });

  it('should return new state if it receives a valid type', () => {
    const filter = 'Sea food';
    const action = changeFilter(filter);
    const newState = filterReducer('', action);
    expect(newState).not.toEqual('');
  });
});
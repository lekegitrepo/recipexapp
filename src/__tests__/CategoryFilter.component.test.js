import React from 'react';
import { shallow } from 'enzyme';
import CategoryFilter from '../components/CategoryFilter.component';

const componentTest = (component, attribute) => {
  const wrapper = component.find(attribute);
  return wrapper;
};

const categories = ['Vegetable', 'Fruit', 'Grain', 'Meat'];

const setup = (props = {}) => {
  const component = shallow(
    <CategoryFilter 
      filter={props.filter} 
      categories={props.categories} 
      changeFilter={props.changeFilter} 
    />,
  );
  return component;
};

describe('CategoryFilter Component', () => {
  let component;

  const props = {
    filter: 'All Categories',
    categories,
    changeFilter: () => null,
  };

  beforeEach(() => {
    component = setup(props);
  });

  it('should render CategoryFilter component', () => {
    const wrapper = componentTest(component, '.filter');
    const options = componentTest(component, 'option');
    expect(wrapper.length).toEqual(1);
    expect(options.length).toEqual(5);
  });
});

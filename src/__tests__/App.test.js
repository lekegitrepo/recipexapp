import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from '../components/App';

/*test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Recipes App/i);
  expect(linkElement).toBeInTheDocument();
});*/

const testAttribute = (component, attribute) => {
  const wrapper = component.find(attribute);
  return wrapper;
};

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

const categories = ['Vegetable', 'Fruit', 'Grain', 'Meat'];

const setup = (props = {}) => {
  const component = shallow(
    /*<App.WrappedComponent 
      filter={props.filter} 
      categories={props.categories} 
      changeFilter={props.changeFilter} 
      recipes={props.recipes} 
    />,*/
    <App />,
  );
  return component;
};

describe('CategoryFilter Component', () => {
  let component;

  const props = {
    filter: '',
    categories,
    recipes,
    changeFilter: () => null,
  };

  beforeEach(() => {
    component = setup(props);
  });

  it('should render without errors', () => {
    const wrapper = testAttribute(component, '.App');
    expect(wrapper.length).toEqual(1);
  });
});

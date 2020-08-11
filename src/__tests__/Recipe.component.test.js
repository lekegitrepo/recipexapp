import React from 'react';
import { shallow } from 'enzyme';
import Recipe from '../components/Recipe.component';

const attributeTest = (component, attribute) => {
  const wrapper = component.find(attribute);
  return wrapper;
};

const recipes = [{
  strMeal: 'Large Pizzas',
  strMealThumb: 'https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg',
}];

const setup = (props = {}) => {
  const component = shallow(<Recipe.WrappedComponent 
    recipes={props.recipes} 
    location={props.location} 
  />);
  return component;
};

describe('Recipe Component', () => {
  let component;

  beforeEach(() => {
    const props = {
      recipes,
      location: {
        state: {
          recipe: 'Pizza',
        },
      },
    };
    component = setup(props);
  });

  it('should render recipe component', () => {
    const element = attributeTest(component, '.container');
    expect(element.length).toEqual(1);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Recipe from '../components/Recipe.component';

const componentTest = (component, attribute) => {
  const wrapper = component.find(attribute);
  return wrapper;
};

const recipes = [{
  strMeal: 'Pizza',
  strMealThumb: 'https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg',
}];

const setup = (props = {}) => {
  const component = shallow(<Recipe.WrappedComponent 
    location={props.location} 
  />);
  return component;
};

describe('Recipe Component', () => {
  let component;

  beforeEach(() => {
    const props = {
      location: {
        state: {
          recipe: 'Pizza',
          recipes,
        },
      },
    };
    component = setup(props);
  });

  it('should render recipe component', () => {
    const element = componentTest(component, '.container');
    expect(element.length).toEqual(1);
  });
});

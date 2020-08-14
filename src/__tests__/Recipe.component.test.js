import React from 'react';
import { shallow } from 'enzyme';
import Recipe from '../components/Recipe.component';

const componentTest = (component, attribute) => {
  const wrapper = component.find(attribute);
  return wrapper;
};

const recipe = [{
  strMeal: 'Pizza',
  strMealThumb: 'https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg',
}];

const setup = (props = {}) => {
  const component = shallow(<Recipe.WrappedComponent
    recipe={props.recipe}
    location={props.location}
    addRecipe={props.addRecipe}
  />);
  return component;
};

describe('Recipe Component', () => {
  let component;

  beforeEach(() => {
    const props = {
      recipe,
      location: {},
      addRecipe: () => {},
    };
    component = setup(props);
  });

  it('should render recipe component', () => {
    const element = componentTest(component, '.container');
    expect(element.length).toEqual(1);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

const testAttribute = (component, attribute) => {
  const wrapper = component.find(attribute);
  return wrapper;
};

const setup = () => {
  const component = shallow(
    <App />,
  );
  return component;
};

describe('CategoryFilter Component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    const wrapper = testAttribute(component, '.App');
    expect(wrapper.length).toEqual(1);
  });
});

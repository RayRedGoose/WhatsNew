import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
  let container;

  beforeEach(() => {
    container = shallow(<Menu
      changeArticleTheme={jest.fn()}
    />);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(container).toMatchSnapshot();
  });

  it('should update state with menu items when changeActiveTab is called', () => {
    // Expectation
    expect(container.state('menuItems')[0].isActive).toEqual(true);
    expect(container.state('menuItems')[1].isActive).toEqual(false);
    // Execution
    container.instance().changeActiveTab('technology');

    // Expectation
    expect(container.state('menuItems')[0].isActive).toEqual(false);
    expect(container.state('menuItems')[1].isActive).toEqual(true);
  });
})

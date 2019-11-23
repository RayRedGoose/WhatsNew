import React from 'react';
import { shallow } from 'enzyme';
import MenuItem from './MenuItem';

describe('MenuItem', () => {
  let element,
  activateItem = jest.fn(),
  changeContent = jest.fn()

  beforeEach(() => {
    element = shallow(<MenuItem
      key = "1"
      elementClass="menu_item active-tab"
      name="Health"
      iconName='./Health.svg'
      text='Health'
      activateItem = {activateItem}
      changeContent = {changeContent}
    />);
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(element).toMatchSnapshot();
  });

  it('should call the activateItem prop when clicked', () => {
    element.simulate('click');
    expect(activateItem).toHaveBeenCalledWith('Health');
  });

  it('should call the changeContent prop when clicked', () => {
    element.simulate('click');
    expect(changeContent).toHaveBeenCalledWith('Health');
  });

  it('should call the activateItem prop when enter is key', () => {
    element.simulate('keypress', {key: 'Enter'});
    expect(activateItem).toHaveBeenCalledWith('Health');
  });

  it('should call the changeContent when enter is key', () => {
    element.simulate('keypress', {key: 'Enter'});
    expect(changeContent).toHaveBeenCalledWith('Health');
  });

})

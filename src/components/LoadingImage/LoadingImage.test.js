import React from 'react';
import { shallow } from 'enzyme';
import LoadingImage from './LoadingImage';

it('should match the snapshot with all data passed in correctly', () => {
  const element = shallow(<LoadingImage />);
  expect(element).toMatchSnapshot();
});

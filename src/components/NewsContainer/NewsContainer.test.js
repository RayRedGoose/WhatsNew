import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';

it('should match the snapshot with all data passed in correctly', () => {
  const container = shallow(<NewsContainer
    newsArticles = {[{
      id: "1",
      headline: 'Mysterious comet',
      img: './image.jpg',
      description: 'Mysterious comet will cause a rare \'Unicorn\' meteor storm this week.',
      url: 'https://www.example.com'
    }]}
  />);

  expect(container).toMatchSnapshot();
});

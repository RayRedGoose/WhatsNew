import React from 'react';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';

it('should match the snapshot with all data passed in correctly', () => {
  const element = shallow(<NewsArticle
    newsPreviewImage="./image-preview.jpg"
    title="Article"
    intro="description of article"
    articleLink="link.com"
    key="1"
  />);

  expect(element).toMatchSnapshot();
});

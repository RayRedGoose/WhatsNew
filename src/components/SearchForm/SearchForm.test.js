import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('Search Form', () => {
  let container,
      changeArticleSwownMock = jest.fn(),
      article = {
        id: "1",
        headline: 'Mysterious comet',
        img: './image.jpg',
        description: 'Mysterious comet will cause a rare \'Unicorn\' meteor storm this week.',
        url: 'https://www.example.com'
      };

  beforeEach(() => {
    container = shallow(<SearchForm
      changeArticleSwown={changeArticleSwownMock}
      articleShown={[ article ]}
    />);
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(container).toMatchSnapshot();
  });

  it('should call the changeArticleSwown prop when clicked', () => {
    container.find('button').simulate(
      'click',
      {preventDefault: () => {}}
    );

    expect(changeArticleSwownMock).toHaveBeenCalledWith([ article ]);
  });

  it('should update state with a search condition when handleChange is called', () => {

    expect(container.state('searchCondition')).toEqual('');

    container.find('input').simulate(
      'change',
      {target: {value: 'matched'}}
    );

    expect(container.state('searchCondition')).toEqual('matched');
  });

  it('should update state with a search condition when clearInputs is called', () => {

    container.find('input').simulate(
      'change',
      {target: {value: 'tratata'}}
    );

    expect(container.state('searchCondition')).toEqual('tratata');

    container.find('button').simulate(
      'click',
      {preventDefault: () => {}}
    );

    expect(container.state('searchCondition')).toEqual('');
  });

  it('should call submitSearch when click was activated by enter', () => {
    const instance = container.instance();
    const spy = jest.spyOn(instance, "submitSearch").mockImplementation(() => {});

    container.find('input').simulate(
      'keypress',
      {key: 'Enter'}
    );

    expect(spy).toHaveBeenCalled();
  });
})

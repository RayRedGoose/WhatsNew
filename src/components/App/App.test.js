import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { getArticles } from '../../ApiCalls/ApiCalls';

describe('App', () => {
  let container;

  beforeEach(() => {
    container = shallow(<App />);
  })

  it('should match the snapshot with no data fetched', () => {
    expect(container).toMatchSnapshot();
  });

  it('should match the snapshot with all data fetched', () => {
    container.setState({ isLoaded: true });
    expect(container).toMatchSnapshot();
  });

  it('should update state with an active tab when changeArticles is called', () => {
    // Setup
    const activeTab = 'local';
    const expected = activeTab;

    // Expectation
    expect(container.state('activeTab')).toEqual(null);

    // Execution
    container.instance().changeArticles(activeTab);

    // Expectation
    expect(container.state('activeTab')).toEqual(expected);
  });
});

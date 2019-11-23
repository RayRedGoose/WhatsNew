import React, { Component } from 'react';
import './SearchForm.scss';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  constructor(props) {
    super();
    this.state = {
      searchCondition: ''
    }
  }

  handleChange = event => {
    this.setState({ searchCondition: event.target.value });
  }

  keyPressed = event => {
    if (event.key === "Enter") {
      this.submitSearch(event)
    }
  }

  submitSearch = event => {
    event.preventDefault();
    const condition = this.state.searchCondition.toLowerCase();
    const searchResult = this.props.articleShown.filter(item => {
      return (
        item.headline.toLowerCase().includes(condition) ||
        item.description.toLowerCase().includes(condition)
      )
    })
    if (searchResult.length > 0) {
      this.props.changeArticleSwown(searchResult);
    }
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({ searchCondition: '' });
  }

  render() {
    return (
      <form className="search">
        <input
          type="text"
          placeholder="Search for news article here."
          onChange={this.handleChange}
          value={this.state.searchCondition}
          onKeyPress={this.keyPressed}/>
        <button onClick={this.submitSearch}>Search Now</button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  changeArticleSwown: PropTypes.func,
  articleShown: PropTypes.array
}

export default SearchForm;

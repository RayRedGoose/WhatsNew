import React, { Component } from 'react';
import './App.scss';
import Menu from '../Menu/Menu.js'
import SearchForm from '../SearchForm/SearchForm'
import LoadingImage from '../LoadingImage/LoadingImage'
import NewsContainer from '../NewsContainer/NewsContainer'
import { getArticles } from '../../ApiCalls/ApiCalls'

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: null
    }
  }

  componentDidMount() {
    getArticles()
      .then(
        (result) => {
          this.setState({
            ...result,
            isLoaded: true,
            activeTab: "local"
          });
        }
      )
      .catch(err => console.error(err))
  }

  changeArticles = (info) => {
    this.setState({activeTab: info})
  }

  render () {
    const articlesOnBoard = (typeof this.state.activeTab === 'string')
      ? this.state[this.state.activeTab]
      : this.state.activeTab

    if (this.state.isLoaded) {
      return (
        <div className="app">
          <Menu changeArticleTheme={this.changeArticles} />
          <SearchForm
            changeArticleSwown={this.changeArticles}
            articleShown={articlesOnBoard}
          />
          <NewsContainer newsArticles={articlesOnBoard} />
        </div>
      )
    }
    if (!this.state.isLoaded) {
      return (
        <div className="app loading">
          <LoadingImage />
        </div>
      )
    }
  }
}

export default App;

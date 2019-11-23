import React from 'react';
import './NewsContainer.scss';
import NewsArticle from '../NewsArticle/NewsArticle';
import PropTypes from 'prop-types';

const NewsContainer = ({newsArticles}) => {
  const newsCards = newsArticles.map(news => {
    return (
      <NewsArticle
        newsPreviewImage={news.img}
        title={news.headline}
        intro={news.description}
        articleLink={news.url}
        key={news.id}
      />
    )
  })

  return (
    <main className="news-container">
      { newsCards }
    </main>
  );
}

NewsContainer.propTypes = {
  newsArticles: PropTypes.array
}

export default NewsContainer;

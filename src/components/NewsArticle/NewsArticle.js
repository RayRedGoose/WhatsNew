import React from 'react';
import './NewsArticle.scss';
import ArrowIcon from '../../images/arrow.svg';
import PropTypes from 'prop-types';

const NewsArticle = ({ newsPreviewImage, title, intro, articleLink }) => {
  return (
    <section className="news-preview">
      <header style={{backgroundImage: `url(${newsPreviewImage})`}}>
      </header>
      <div className="text-wrapper">
        <h2>{title}</h2>
        <p>{intro}</p>
      </div>
      <div className="link-wrapper">
        <a href={articleLink}>Link To Article</a>
        <img src={ArrowIcon} alt="arrow forward"/>
      </div>
    </section>
  );
}

NewsArticle.propTypes = {
  newsPreviewImage: PropTypes.string,
  title: PropTypes.string,
  intro: PropTypes.string,
  articleLink: PropTypes.string
}

export default NewsArticle;

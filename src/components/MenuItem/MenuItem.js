import React from 'react';
import './MenuItem.scss';
import PropTypes from 'prop-types';

const MenuItem = (props) => {
  const updateActiveTab = (event) => {
    props.activateItem(props.name)
    props.changeContent(props.name)
  }

  const keyPressed = event => {
    if (event.key === "Enter") {
      updateActiveTab(event)
    }
  }

  return (
    <div
      role="button"
      tabIndex="0"
      name={props.name}
      className={props.elementClass}
      onClick={updateActiveTab}
      onKeyPress={keyPressed}>
      <img src={props.iconName} alt={props.text + " icon"}/>
      <h2>{props.text}</h2>
    </div>
  );
}

MenuItem.propTypes = {
  name: PropTypes.string,
  elementClass: PropTypes.string,
  iconName: PropTypes.string,
  text: PropTypes.string,
  activateItem: PropTypes.func,
  changeContent: PropTypes.func,
}

export default MenuItem;

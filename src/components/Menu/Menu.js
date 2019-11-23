import React, { Component } from 'react';
import './Menu.scss';
import MenuItem from '../MenuItem/MenuItem';
import LocalImage from '../../images/placeholder.svg';
import TechImage from '../../images/technology.svg';
import EntrtImage from '../../images/tickets.svg';
import ScienceImage from '../../images/rocket.svg';
import HealthImage from '../../images/health.svg';
import PropTypes from 'prop-types';

class Menu extends Component {
  constructor(props) {
    super();
    this.state = {
      menuItems: [
        {id: 1, name:"local", icon:LocalImage, text: "Local news", isActive: true},
        {id: 2, name:"technology", icon:TechImage, text: "Technology", isActive: false},
        {id: 3, name:"entertainment", icon:EntrtImage, text: "Entertainment", isActive: false},
        {id: 4, name:"science", icon:ScienceImage, text: "Science", isActive: false},
        {id: 5, name:"health", icon:HealthImage, text: "Health", isActive: false}
      ]
    }
  }

  changeActiveTab = (activeItemName) => {
    const newStates = this.state.menuItems.map(item => {
      if (item.name === activeItemName) {
        item.isActive = true
      } else {
        item.isActive = false
      }
      return item
    })

    this.setState({menuItems: [...newStates]})
  }

  render() {
    const menuItemsElements = this.state.menuItems.map(item => {
      return (
        <MenuItem
          key = {item.id}
          elementClass={(item.isActive) ? "menu_item active-tab" : "menu_item"}
          name={item.name}
          iconName={item.icon}
          text={item.text}
          activateItem = {this.changeActiveTab}
          changeContent = {this.props.changeArticleTheme}
        />
      )
    })

    return (
      <aside className="menu">
        <h1>What's</h1>
        <nav>
          {menuItemsElements}
        </nav>
      </aside>
    );
  }
}

Menu.propTypes = {
  changeArticleTheme: PropTypes.func
}


export default Menu;

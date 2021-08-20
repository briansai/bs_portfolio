import React from 'react';
import './NavItem.scss';

function NavItem({ item }) {
  return <li className="nav-item">{item}</li>;
}

export default NavItem;

import React from 'react';
import NavItem from './NavItem';
import { navigation } from '../utils/constants';
import './Header.scss';

function Header() {
  return (
    <div className="header">
      <div className="header__left">logo</div>
      <ul className="header__right">
        {navigation.map((item) => (
          <NavItem item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Header;

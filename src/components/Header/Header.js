import React from 'react';
import { NavLink } from 'react-router-dom';
import Burger from 'components/Burger/Burger';
import HeaderWrapper from './HeaderWrapper';

const Header = () => (
  <HeaderWrapper>
    <div>
      <NavLink to="/">
        <h1>News App</h1>
        <p>Keep up with breaking news</p>
      </NavLink>
      <Burger />
    </div>
  </HeaderWrapper>
);

export default Header;

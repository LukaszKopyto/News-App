import React from 'react';
import Burger from 'components/Burger/Burger';
import HeaderWrapper from './HeaderWrapper';

const Header = () => (
  <HeaderWrapper>
    <div>
      <div>
        <h1>News App</h1>
        <p>Keep up with breaking news</p>
      </div>
      <Burger />
    </div>
  </HeaderWrapper>
);

export default Header;

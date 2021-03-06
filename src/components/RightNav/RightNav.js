import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import RightNavWrapper from 'components/RightNav/RightNavWrapper';

const RightNav = ({ open }) => (
  <RightNavWrapper open={open}>
    <li>
      <NavLink to="/politics" activeStyle={{ fontWeight: 800 }} title="Politics">
        Politics
      </NavLink>
    </li>
    <li>
      <NavLink to="/sport" activeStyle={{ fontWeight: 800 }} title="Sport">
        Sport
      </NavLink>
    </li>
    <li>
      <NavLink to="/business" activeStyle={{ fontWeight: 800 }} title="Business">
        Business
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/articles/for-later"
        activeStyle={{ fontWeight: 800 }}
        title="Articles for later"
      >
        Articles for later
      </NavLink>
    </li>
  </RightNavWrapper>
);

RightNav.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default RightNav;

import React from 'react';
import PropTypes from 'prop-types';
import RightNavWrapper from 'components/RightNav/RightNavWrapper';

const RightNav = ({ open }) => (
  <RightNavWrapper open={open}>
    <li>Politics</li>
    <li>Sport</li>
    <li>Bussiness</li>
    <li>World News</li>
  </RightNavWrapper>
);

RightNav.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default RightNav;

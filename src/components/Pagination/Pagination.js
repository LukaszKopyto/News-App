import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import PaginationWrapper from 'components/Pagination/PaginationWrapper';

const Pagination = () => {
  const { section } = useParams();
  const pagination = [];

  for (let index = 1; index < 9; index += 1) {
    pagination.push(index);
  }

  return (
    <PaginationWrapper>
      {pagination.map((item) => (
        <NavLink to={`/${section}/${item}`} key={uuidv4()}>
          <li>{`${item}`}</li>
        </NavLink>
      ))}
    </PaginationWrapper>
  );
};

export default Pagination;

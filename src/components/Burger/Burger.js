import React, { useState } from 'react';
import BurgerWrapper from 'components/Burger/BurgerWrapper';
import RightNav from 'components/RightNav/RightNav';

const Burger = () => {
  const [open, setOpen] = useState(false);

  const handleOnClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <BurgerWrapper open={open} onClick={handleOnClick}>
        <div />
        <div />
        <div />
      </BurgerWrapper>
      <RightNav open={open} />
    </>
  );
};

export default Burger;

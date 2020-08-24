import React from 'react';

import { ReactComponent as ShoeSVG } from 'assets/icons/shoetop.svg';

const Stars = ({ rating }) => {
  const filledShoes = [...Array(rating).keys()];
  const emptyShoes = [...Array(5 - rating).keys()];

  return (
    <>
      {filledShoes
        ? filledShoes.map((key) => (
            <div key={`shoe${key}`}>
              <ShoeSVG />
            </div>
          ))
        : null}
      {emptyShoes
        ? emptyShoes.map((key) => (
            <div style={{ opacity: '0.3' }} key={`empty${key}`}>
              <ShoeSVG />
            </div>
          ))
        : null}
    </>
  );
};

export default Stars;

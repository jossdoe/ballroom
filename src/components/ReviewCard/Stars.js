import React from 'react';

import { ReactComponent as ShoeSVG } from 'assets/icons/shoetop.svg';

const Stars = ({ rating }) => {
  return (
    <>
      {Array(rating).fill(
        <div>
          <ShoeSVG />
        </div>
      )}
      {Array(5 - rating).fill(
        <div style={{ opacity: '0.3' }}>
          <ShoeSVG />
        </div>
      )}
    </>
  );
};

export default Stars;

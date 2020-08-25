import React from 'react';
import styled from 'styled-components';

import FacebookSVG from 'assets/share/fb.svg';
import TwitterSVG from 'assets/share/tw.svg';
import PinterestSVG from 'assets/share/pi.svg';

export const ShareButton = styled.div`
  background-color: ${({ theme }) => theme.primary};
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  transition: all 0.4s;
`;

export const Options = styled.div`
  display: flex;

  & > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      height: 70%;
      transition: all 0.1s;
    }
  }

  & > div:hover svg {
    height: 80%;
  }

  & > div:active svg {
    transition: all 0.1s;
    height: 60%;
  }
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  margin: 1em 0;
  height: 50px;
  width: 160px;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  transform: scale(0.9);
  transition: all 0.4s;
  cursor: pointer;
  font-weight: 700;
  font-size: 0.9rem;

  &:hover {
    transform: scale(1);
  }

  &:hover ${ShareButton} {
    left: -100%;
  }

  @media (max-width: 1024px) {
    ${ShareButton} {
      display: none;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const ShareMenu = () => {
  return (
    <Container>
      <ShareButton>SHARE</ShareButton>
      <Options>
        <div>
          <FacebookSVG />
        </div>
        <div>
          <TwitterSVG />
        </div>
        <div>
          <PinterestSVG />
        </div>
      </Options>
    </Container>
  );
};

export default ShareMenu;

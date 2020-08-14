import React from 'react';
import { Container, Icons } from './styled';
import { ReactComponent as FacebookSVG } from 'assets/icons/facebook.svg';
import { ReactComponent as TwitterSVG } from 'assets/icons/twitter.svg';
import { ReactComponent as InstagramSVG } from 'assets/icons/instagram.svg';
import { ReactComponent as SpotifySVG } from 'assets/icons/spotify.svg';

const Footer = () => {
  return (
    <Container>
      <section>
        <Icons>
          <a href="https://tenor.com/view/the-simpsons-old-man-dancing-grooving-killing-it-gif-4679682">
            <FacebookSVG />
          </a>
          <a href="https://twitter.com/markdalgleish/status/1265471021991096320">
            <TwitterSVG />
          </a>
          <a href="https://www.trumpgraffitimemes.com/">
            <InstagramSVG />
          </a>
          <a href="https://www.youtube.com/watch?v=ybGOT4d2Hs8">
            <SpotifySVG />
          </a>
        </Icons>
      </section>
    </Container>
  );
};

export default Footer;

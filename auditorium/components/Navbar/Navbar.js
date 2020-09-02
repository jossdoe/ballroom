import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Wrapper,
  Container,
  Logo,
  SiteName,
  DesktopMenu,
  MobileMenu,
  MobileMenuItem,
} from './styled';
import LogoSVG from 'assets/logo.svg';
import NewsSVG from 'assets/icons/news.svg';
import ReviewsSVG from 'assets/icons/reviews.svg';

const Navbar = () => {
  const router = useRouter();
  const getClassName = (aRoute) => {
    if (router.pathname === aRoute) return 'active';
    return null;
  };

  return (
    <Wrapper>
      <Container>
        <Logo>
          <Link href="/">
            <a>
              <LogoSVG className="desktop-logo-svg" />
            </a>
          </Link>
          <Link href="/">
            <a>
              <SiteName>ballroom</SiteName>
            </a>
          </Link>
        </Logo>
        <DesktopMenu>
          <ul>
            <Link href="/">
              <a className={getClassName('/')}>
                <li>Home</li>
              </a>
            </Link>
            <Link href="/news">
              <a className={getClassName('/news')}>
                <li>News</li>
              </a>
            </Link>
            <Link href="/reviews">
              <a className={getClassName('/reviews')}>
                <li>Reviews</li>
              </a>
            </Link>
            <Link href="/tours">
              <a className={getClassName('/tours')}>
                <li>Tours</li>
              </a>
            </Link>
          </ul>
        </DesktopMenu>
        <MobileMenu>
          <MobileMenuItem>
            <Link href="/news">
              <a className={getClassName('/news')}>
                <div>
                  <NewsSVG />
                </div>
              </a>
            </Link>
          </MobileMenuItem>
          <MobileMenuItem>
            <Link href="/">
              <a className={getClassName('/')}>
                <div className="home-button">
                  <LogoSVG />
                </div>
              </a>
            </Link>
          </MobileMenuItem>
          <MobileMenuItem>
            <Link href="/reviews">
              <a className={getClassName('/reviews')}>
                <div>
                  <ReviewsSVG />
                </div>
              </a>
            </Link>
          </MobileMenuItem>
        </MobileMenu>
      </Container>
    </Wrapper>
  );
};

export default Navbar;

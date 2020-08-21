import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Wrapper,
  Container,
  Logo,
  SiteName,
  DesktopMenu,
  MobileMenu,
  MobileMenuItem,
} from './styled';
import { ReactComponent as LogoSVG } from 'assets/logo.svg';
import { ReactComponent as NewsSVG } from 'assets/icons/news.svg';
import { ReactComponent as ReviewsSVG } from 'assets/icons/reviews.svg';

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <Logo>
          <LogoSVG className="desktop-logo-svg" />
          <SiteName>ballroom</SiteName>
        </Logo>
        <DesktopMenu>
          <ul>
            <NavLink exact to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="/news">
              <li>News</li>
            </NavLink>
            <NavLink to="/reviews">
              <li>Reviews</li>
            </NavLink>
          </ul>
        </DesktopMenu>
        <MobileMenu>
          <MobileMenuItem>
            <NavLink to="/news">
              <div>
                <NewsSVG />
              </div>
            </NavLink>
          </MobileMenuItem>
          <MobileMenuItem>
            <NavLink exact to="/">
              <div className="home-button">
                <LogoSVG />
              </div>
            </NavLink>
          </MobileMenuItem>
          <MobileMenuItem>
            <NavLink to="/reviews">
              <div>
                <ReviewsSVG />
              </div>
            </NavLink>
          </MobileMenuItem>
        </MobileMenu>
      </Container>
    </Wrapper>
  );
};

export default Navbar;

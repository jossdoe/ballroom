import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wrapper, Container, Logo, SiteName, Menu } from './styled';
import { ReactComponent as LogoSVG } from 'assets/logo.svg';

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <Logo>
          <LogoSVG />
          <SiteName>ballroom</SiteName>
        </Logo>
        <Menu>
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
        </Menu>
      </Container>
    </Wrapper>
  );
};

export default Navbar;

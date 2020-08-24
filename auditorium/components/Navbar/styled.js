import styled from 'styled-components';

export const Wrapper = styled.div`
  position: sticky;
  box-shadow: 0 0 8px #00000066, 0 0 16px #00000033;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.backgroundDark};
  z-index: 99999;

  @media (max-width: 768px) {
    position: fixed;
    top: auto;
    bottom: 0px;
  }
`;

export const Container = styled.div`
  display: flex;
  height: 80px;
  padding: 0 20px;
  max-width: 1250px;
  margin: 0 auto;

  @media (max-width: 768px) {
    position: relative;
    display: block;
    padding: 0;
    height: 90px;
  }
`;

export const SiteName = styled.div`
  color: ${({ theme }) => theme.primary};
  font-family: 'Staatliches', cursive;
  font-size: 2rem;
  margin-left: 15px;
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 2px;
    left: 0;
    right: 0;
    height: 4px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.secondary};
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: inherit;
    text-decoration: none;
  }

  svg.desktop-logo-svg {
    color: ${({ theme }) => theme.secondary};
    height: 50px;
  }

  @media (max-width: 768px) {
    svg.desktop-logo-svg {
      display: none;
    }

    ${SiteName} {
      display: none;
    }
  }
`;

export const DesktopMenu = styled.nav`
  flex: 1;

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  li {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 0 15px;
    border-radius: 6px;
    overflow: hidden;
    padding: 15px 40px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.9rem;
    position: relative;
    cursor: pointer;
  }

  li::before,
  li::after {
    content: '';
    display: block;
    position: absolute;
    background-color: ${({ theme }) => theme.secondary};
    opacity: 0.75;
    width: 0%;
    height: 100%;
    z-index: -1;
    transition: all 0.3s;
  }

  li::before {
    left: 0;
    top: 0;
  }

  li::after {
    right: 0;
    top: 0;
  }

  .active,
  li:hover {
    color: ${({ theme }) => theme.backgroundDark};
  }

  .active li::before,
  .active li::after,
  li:hover::before,
  li:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenu = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  padding-bottom: 15px;
  transition: all 0.2s;

  a {
    color: inherit;
    text-decoration: none;
    transition: all 0.2s;
  }

  .active {
    color: ${({ theme }) => theme.secondary};
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileMenuItem = styled.div`
  flex: 1;
  text-align: center;
  transition: all 0.2s;

  .home-button {
    background-color: ${({ theme }) => theme.primary};
    height: 90px;
    width: 90px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: relative;

    svg {
      position: relative;
      right: 3px;
      bottom: 3px;
    }
  }

  &:active {
    transform: scale(0.85);
  }
`;

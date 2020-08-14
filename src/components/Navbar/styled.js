import styled from 'styled-components';

export const Wrapper = styled.div`
  position: sticky;
  box-shadow: 0 0 8px #00000066, 0 0 16px #00000033;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.backgroundDark};
`;

export const Container = styled.div`
  display: flex;
  height: 80px;
  padding: 0 20px;
  max-width: 1250px;
  margin: 0 auto;

  svg {
    color: ${({ theme }) => theme.secondary};
    height: 50px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    color: ${({ theme }) => theme.primary};
    font-family: 'Staatliches', cursive;
    font-size: 2rem;
    margin-left: 15px;
    position: relative;
  }

  section::after {
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

export const Menu = styled.nav`
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
`;

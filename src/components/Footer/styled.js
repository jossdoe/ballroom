import styled from 'styled-components';

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.backgroundDark}99;
  bottom: 0;
  width: 100%;
  height: 80px;

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    max-width: 1250px;
    margin: 0 auto;
  }
`;

export const Icons = styled.div`
  a {
    color: inherit;
    text-decoration: none;
  }

  & > * + * {
    margin-left: 10px;
  }

  & svg {
    transition: all 0.2s;
  }

  & svg:hover {
    transform: scale(1.2);
  }

  & svg:active {
    transform: scale(0.9);
  }
`;

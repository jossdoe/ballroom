import styled from 'styled-components';

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.backgroundDark}99;
  bottom: 0;
  width: 100%;
  height: 100px;

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    max-width: 1250px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    height: 250px;
    padding-bottom: 150px;
  }
`;

export const Icons = styled.div`
  text-align: center;

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

  @media (max-width: 768px) {
    & svg {
      height: 50px;
      margin-top: 40px;
    }
  }
`;

export const Copyright = styled.div`
  text-align: center;

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: inherit;
  }

  a:hover {
    text-decoration: underline;
  }
`;

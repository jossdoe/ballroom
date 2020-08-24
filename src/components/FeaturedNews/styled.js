import styled from 'styled-components';

export const Container = styled.div``;

export const TitleFlex = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;

  a {
    color: inherit;
    text-decoration: none;
  }

  h2 {
    flex: 1;
  }

  aside {
    display: flex;
    align-items: center;
    position: relative;
    top: 10px;
    color: ${({ theme }) => theme.colorDark};
    transition: all 0.2s;
    cursor: pointer;
  }

  aside:hover {
    color: ${({ theme }) => theme.color};
  }
`;

export const FlexContainer = styled.div`
  margin: 10px;
  display: flex;
  & > * + * {
    margin-left: 30px;
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    & > * + * {
      margin-left: 0;
      margin-top: 30px;
    }
  }
  @media only screen and (max-width: 768px) {
  }
`;

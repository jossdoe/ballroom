import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${(props) => css`
    padding: 10px;
    background-color: ${props.theme.backgroundLight};
    display: grid;
    grid-template-columns: 50% 1fr;
    grid-template-rows: repeat(2, 50%);
    place-items: center;

    // rest of styling is in the respected components
    .article0 {
      grid-area: 1 / 1 / 3 / 2;
    }
    .article1 {
      grid-area: 1 / 2 / 2 / 3;
    }
    .article2 {
      grid-area: 2 / 2 / 3 / 3;
    }
  `}
`;

export const TitleFlex = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;

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

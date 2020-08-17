import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${(props) => css`
    padding: 20px;
    background-color: ${props.theme.backgroundLight};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    /* place-items: center; */

    .article0 {
      grid-area: 1 / 1 / 3 / 2;
    }
    .article1 {
      display: flex;
      // align-items: center;
      img {
        height: 200px;
        width: 200px;
        object-fit: cover;
      }
      .news-content {
        flex: 1;
      }
      grid-area: 1 / 2 / 2 / 3;
    }
    .article2 {
      display: flex;
      img {
        height: 200px;
        width: 200px;
        object-fit: cover;
      }
      .news-content {
        flex: 1;
      }
      grid-area: 2 / 2 / 3 / 3;
    }
  `}
`;

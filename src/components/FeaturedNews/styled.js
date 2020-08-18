import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${(props) => css`
    padding: 10px;
    background-color: ${props.theme.backgroundLight};
    display: grid;
    grid-template-columns: 50% 1fr;
    grid-template-rows: repeat(2, 50%);
    place-items: center;

    .article0 {
      padding: 10px;
      height: 100%;
      img {
        width: 100%;
        object-fit: cover;
      }
      grid-area: 1 / 1 / 3 / 2;
    }
    .article1 {
      padding: 10px;
      display: flex;
      height: 100%;

      img {
        height: 100%;
        width: 40%;
        object-fit: cover;
      }
      .news-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        p {
          flex: 1;
        }
      }
      grid-area: 1 / 2 / 2 / 3;
    }
    .article2 {
      padding: 10px;
      display: flex;
      height: 100%;
      img {
        height: 100%;
        width: 40%;
        object-fit: cover;
      }
      .news-content {
        flex: 1;
        margin-left: 10px;
      }
      grid-area: 2 / 2 / 3 / 3;
    }
  `}
`;

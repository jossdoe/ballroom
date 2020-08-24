import styled from 'styled-components';

export const Container = styled.div``;

export const GridContainer = styled.div`
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
  row-gap: 30px;

  @media only screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

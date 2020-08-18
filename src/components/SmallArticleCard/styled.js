import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  display: flex;
  height: 100%;

  img {
    height: 100%;
    width: 40%;
    object-fit: cover;
  }
`;

export const NewsContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const Title = styled.h3`
  margin: 0;
`;

export const Teaser = styled.p`
  flex: 1;
`;

export const Meta = styled.small``;

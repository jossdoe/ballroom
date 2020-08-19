import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 10px;
  background-color: ${({ theme }) => theme.backgroundLight};
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 58%;
  margin-right: 20px;
`;

export const Image = styled.img`
  flex: 1 1 auto;
  object-fit: cover;
`;

export const NewsContent = styled.div`
  flex: 1 1 auto;
  width: 42%;
  padding: 20px 60px 20px 20px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 2.8rem;
  line-height: 1.1;
`;

export const Teaser = styled.p``;

export const Meta = styled.small``;

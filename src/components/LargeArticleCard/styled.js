import styled from 'styled-components';

export const Title = styled.h3`
  display: inline;
  margin: 0;
  font-family: 'Noto Serif', Georgia, serif;
  font-size: 2.8rem;
  line-height: 1.1;
`;

export const Container = styled.div`
  display: flex;
  margin: 10px 10px 40px;
  background-color: ${({ theme }) => theme.backgroundLight};
  &:hover {
    cursor: pointer;
    ${Title} {
      text-decoration: underline ${({ theme }) => theme.primary};
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 58%;
  margin-right: 20px;
`;

export const Image = styled.img`
  flex: 1 1 auto;
  width: 100%;
  object-fit: cover;
`;

export const NewsContent = styled.div`
  flex: 1 1 auto;
  width: 42%;
  padding: 20px 60px 20px 20px;
`;

export const Teaser = styled.p`
  margin-bottom: 1.5rem;
`;

export const Meta = styled.small``;

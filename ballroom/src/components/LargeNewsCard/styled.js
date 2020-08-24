import styled from 'styled-components';

export const ImageContainer = styled.div`
  display: flex;
  width: 58%;
  margin-right: 20px;
`;

export const Image = styled.img`
  flex: 1 1 auto;
  width: 100%;
  object-fit: cover;
  object-position: 50% 0;
`;

export const NewsContent = styled.div`
  flex: 1 1 auto;
  width: 42%;
  padding: 20px 60px 20px 20px;
`;

export const Title = styled.h3`
  display: inline;
  margin: 0;
  font-family: 'Noto Serif', Georgia, serif;
  font-size: 2.8rem;
  line-height: 1.1;
`;

export const Teaser = styled.p`
  margin-bottom: 1.5rem;
`;

export const Meta = styled.small``;

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

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    ${ImageContainer} {
      max-height: 400px;
      width: 100%;
    }
    ${NewsContent} {
      width: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    text-align: center;

    ${ImageContainer} {
      height: 200px;
    }

    ${NewsContent} {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 0;
    }

    ${Teaser} {
      flex: 1;
      padding: 0 1.5rem 1rem;
    }

    ${Title} {
      font-family: inherit;
      font-size: 1.5rem;
      padding: 1.5rem;
    }

    ${Meta} {
      padding: 0 1.5rem 2rem;
    }
  }
`;

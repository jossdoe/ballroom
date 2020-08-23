import styled from 'styled-components';

export const ImageContainer = styled.div`
  height: 200px;
  width: 100%;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: 50% 0;
`;

export const NewsContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Title = styled.h3`
  flex: 1;
  margin: 0;
  font-size: 1.5rem;
  padding: 1rem;
`;

export const Meta = styled.small`
  padding: 0 1.5rem 2rem;
`;

export const Highlight = styled.div`
  height: 2px;
  transition: background-color 0.2s;
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: ${({ theme }) => theme.backgroundLight};

  &:hover {
    cursor: pointer;
    ${Highlight} {
      background-color: ${({ theme }) => theme.primary};
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    ${ImageContainer} {
      margin-right: 0;
      width: 100%;
    }

    ${NewsContent} {
      width: 100%;
    }
  }
`;

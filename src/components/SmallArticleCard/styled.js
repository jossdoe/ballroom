import styled from 'styled-components';

export const Highlight = styled.div`
  height: 2px;
  transition: background-color 0.2s;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: ${({ theme }) => theme.backgroundLight};

  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    object-position: 50% 0;
  }

  &:hover {
    cursor: pointer;
    ${Highlight} {
      background-color: ${({ theme }) => theme.primary};
    }
  }
`;

export const NewsContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  padding: 1rem;
`;

export const Teaser = styled.p`
  flex: 1;
  padding: 0 1.5rem 1rem;
`;

export const Meta = styled.small`
  padding: 0 1.5rem 2rem;
`;

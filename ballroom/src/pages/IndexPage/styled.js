import styled from 'styled-components';

export const Container = styled.div``;

export const SiteName = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: inline-block;
    color: ${({ theme }) => theme.primary};
    font-family: 'Staatliches', cursive;
    font-size: 4rem;
    margin: 40px 0;
    position: relative;

    &::after {
      content: '';
      display: inline-block;
      position: absolute;
      bottom: 2px;
      left: 0;
      right: 0;
      height: 8px;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.secondary};
    }
  }
`;

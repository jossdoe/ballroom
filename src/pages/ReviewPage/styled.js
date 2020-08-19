import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${({ theme }) => theme.backgroundLight};
  margin-top: 40px;
  display: flex;
`;

export const TitleInfo = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Band = styled.h2`
  margin: 0;
  opacity: 0.8;
`;

export const Album = styled.h1`
  margin: 0 0 20px;
  font-family: 'Noto Serif';
`;

export const Rating = styled.div`
  display: flex;
  width: 140px;

  & > div {
    flex: 1;
    margin: 0 -10px;

    svg {
      width: 100%;
    }
  }
`;

export const ContentFlex = styled.div`
  display: flex;
`;

export const MetaData = styled.div`
  flex: 1;
`;

export const Text = styled.div`
  max-width: 600px;
`;

export const Empty = styled.div`
  flex: 1;
`;

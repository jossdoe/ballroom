import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${({ theme }) => theme.backgroundLight};
  margin: 40px 0 40px;
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
  padding: 1em;
  line-height: 1.5;
`;

export const ReleaseDate = styled.div`
  margin: 0 0 0.5em;

  span {
    background-color: ${({ theme }) => theme.backgroundLight};
    padding: 3px 6px;
    border-radius: 6px;
  }
`;

export const Genre = styled.div`
  margin: 0 0 0 6px;
`;

export const Text = styled.div`
  max-width: 600px;
`;

export const AuthorData = styled.div`
  flex: 1;
  padding: 1em;
  text-align: right;

  & > div {
    margin-bottom: 0.5em;
  }

  & > small {
    color: ${({ theme }) => theme.colorDark};
  }
`;

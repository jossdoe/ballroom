import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  margin: 0 -10px;
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.backgroundLight};
  margin: 40px 0 60px;
  display: flex;
  position: relative;
  transition: all 0.4s;
  bottom: 0px;
  box-shadow: 0px 0px 0px transparent;

  &:hover {
    box-shadow: 2px 4px 7px #00000022;
    bottom: 4px;
  }
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

export const Author = styled.small`
  color: ${({ theme }) => theme.colorDark};
`;

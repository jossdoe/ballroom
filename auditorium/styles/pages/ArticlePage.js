import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: 'Noto Serif', Georgia, serif;
  font-size: 2.8rem;
  margin: 50px 0 0 0;
  @media only screen and (max-width: 992px) {
    padding: 0 2.5%;
    font-size: 2rem;
  }
`;

export const Teaser = styled.p`
  opacity: 0.8;
  margin: 0 0 50px 0;
  @media only screen and (max-width: 992px) {
    padding: 0 2.5%;
  }
`;

export const Separator = styled.div`
  height: 2px;
  width: 100px;
  margin: 25px 0;
  background-color: ${({ theme }) => theme.primary};
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 500px;
  width: 100%;
  padding-bottom: 20px;
  @media only screen and (max-width: 768px) {
    height: auto;
    width: 95%;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: 50% 0;
  height: 100%;
  width: 100%;
`;

export const ImageDescription = styled.small`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const FlexContainer = styled.div`
  margin-top: 30px;
  display: flex;
  @media only screen and (max-width: 992px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 768px) {
  }
`;

export const GridContainer = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
  row-gap: 30px;
  @media only screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Author = styled.p`
  margin-right: 10px;
  & > span {
    font-weight: bold;
  }
`;

export const Publishing = styled.small`
  text-align: right;
  margin: 0 10px 0 0;
  @media only screen and (max-width: 992px) {
    margin: 0;
    text-align: center;
  }
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 200px;
  position: sticky;
  top: 120px;
  width: 25%;
  @media only screen and (max-width: 992px) {
    width: 100%;
    align-items: center;
    order: -1;
    position: unset;
    height: unset;
    margin-bottom: 20px;
  }
`;

export const Content = styled.div`
  width: 75%;
  @media only screen and (max-width: 992px) {
    width: 100%;
    padding: 0 2.5%;
  }
`;

import styled, { css } from 'styled-components';

export const Header = styled.header`
  background-color: ${({ theme }) => theme.backgroundLight};
  margin: 40px 0 40px;
  display: flex;

  img.mobile-image {
    display: none;
  }

  @media (max-width: 768px) {
    background-color: transparent;
    margin: -20px 0 0;

    img.desktop-image {
      display: none;
    }

    img.mobile-image {
      display: inline-block;
      width: 100%;
      max-width: 300px;
      border-radius: 6px;
      margin-bottom: 20px;
    }
  }
`;

export const FavTracks = styled.section`
  ${(props) => css`
    overflow: hidden;
    height: 400px;
    width: ${props.show ? '370px' : '0px'};
    transition: all 0.3s;

    h3 {
      text-align: center;
      white-space: nowrap;
      margin-top: 40px;
    }

    @media (max-width: 768px) {
      display: none;
    }
  `}
`;

export const MobileTracks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;

    h3 {
      text-align: center;
    }
  }
`;

export const AlbumCover = styled.img`
  ${(props) => css`
    overflow: hidden;
    width: ${props.show ? '400px' : '0px'};
    transition: all 0.3s;
    object-fit: cover;
  `}
`;

export const TracksButton = styled.button`
  border: none;
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  outline: none;
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 20px;
  margin-top: -60px;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transition: all 0.1s;
    transform: scale(0.9);
  }

  svg {
    height: 30px;
  }

  .play-svg {
    position: relative;
    left: 2px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TitleInfo = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

export const Band = styled.h2`
  margin: 0;
  opacity: 0.8;
`;

export const Album = styled.h1`
  margin: 0 0 20px;
  font-family: 'Noto Serif';
  text-align: center;
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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MetaData = styled.div`
  flex: 1;
  padding: 1em;
  line-height: 1.5;
  min-width: 200px;

  @media (max-width: 768px) {
    order: 1;
    text-align: center;
  }
`;

export const ReleaseDate = styled.div`
  margin: 0 0 0.5em;

  span {
    background-color: ${({ theme }) => theme.backgroundLight};
    padding: 3px 6px;
    border-radius: 6px;
  }

  @media (max-width: 768px) {
    display: inline-block;
  }
`;

export const Genre = styled.div`
  margin: 0;

  span {
    background-color: ${({ theme }) => theme.primary};
    padding: 3px 6px;
    border-radius: 6px;
  }

  @media (max-width: 768px) {
    display: inline-block;
    margin: 0 0 0 6px;
  }
`;

export const ShareMenuContainer = styled.div`
  @media (max-width: 768px) {
    margin: 0 auto;
    width: 160px;
    text-align: center;
  }
`;

export const Text = styled.div`
  max-width: 600px;

  @media (max-width: 768px) {
    order: 3;
    margin: 0 auto;
  }
`;

export const AuthorData = styled.div`
  flex: 1;
  padding: 1em;
  text-align: right;
  min-width: 200px;

  & > div {
    margin-bottom: 0.5em;
  }

  & > small {
    color: ${({ theme }) => theme.colorDark};
  }

  @media (max-width: 768px) {
    order: 2;
    text-align: center;
  }
`;

export const ShareButton = styled.div`
  background-color: ${({ theme }) => theme.primary};
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  transition: all 0.4s;
`;

export const Options = styled.div`
  display: flex;

  & > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      height: 70%;
      transition: all 0.2s;
    }
  }

  & > div:hover svg {
    height: 80%;
  }

  & > div:active svg {
    transition: all 0.1s;
    height: 60%;
  }
`;

export const ShareMenu = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  margin: 1em 0;
  height: 50px;
  width: 160px;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  transform: scale(0.9);
  transition: all 0.4s;
  cursor: pointer;
  font-weight: 700;
  font-size: 0.9rem;

  &:hover {
    transform: scale(1);
  }

  &:hover ${ShareButton} {
    left: -100%;
  }
`;

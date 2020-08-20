import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  margin: 10px;
  box-shadow: 1px 2px 7px #00000044, 1px 2px 14px #00000044;
  border-radius: 10px;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  transition: all 0.3s;
  bottom: 0px;

  & > * + * {
    margin-top: 0;
  }

  img {
    width: 100%;
    border-radius: 6px;
    margin-bottom: 15px;
  }

  &:hover {
    bottom: 5px;
    box-shadow: 3px 7px 7px #00000033, 3px 7px 14px #00000033;
  }

  &:active {
    transition: all 0.1s;
    bottom: 0px;
    box-shadow: 1px 2px 7px #00000044, 1px 2px 14px #00000044;
  }
`;

export const ReleaseDate = styled.div`
  background-color: ${({ theme }) => theme.backgroundLight};
  padding: 2px 5px;
  border-radius: 3px;
  font-size: 0.8rem;
  position: absolute;
  top: 26px;
  right: 26px;
`;

export const AlbumTitle = styled.h3`
  line-height: 1.5;
  font-size: 1.2rem;
  text-align: center;
  margin: 0 auto 7px;
  color: ${({ theme }) => theme.secondary};
`;

export const BandName = styled.p`
  font-weight: 700;
  margin: 0 auto 15px;
`;

export const AlbumDetails = styled.p`
  font-size: 0.9rem;
  margin: 0 auto 15px;
  color: ${({ theme }) => theme.colorDark};
`;

export const Rating = styled.div`
  flex: 1;
  display: flex;
  width: 90%;
  margin: 0 auto;

  & > div {
    flex: 1;
    margin: 0 -10px;
  }

  svg {
    width: 100%;
  }
`;

export const Meta = styled.small`
  margin: 0 auto;
  color: ${({ theme }) => theme.colorDark};
`;

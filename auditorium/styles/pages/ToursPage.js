import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
`;

export const Featured = styled.header`
  min-height: 250px;
  background-color: ${({ theme }) => theme.backgroundLight};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 0 40px;
  padding: 50px;
  border-radius: 10px;
`;

export const FeatName = styled.div`
  font-family: 'Noto Serif', Georgia, serif;
  font-weight: 700;
  font-size: 1.8rem;
  margin: 0;
`;

export const FeatBand = styled.div`
  font-weight: bold;
  font-size: 1.4rem;
  margin: 0 0 10px;
  color: ${({ theme }) => theme.secondary};
`;

export const FeatDates = styled.div`
  background-color: ${({ theme }) => theme.backgroundMedium};
  padding: 3px 6px;
  border-radius: 6px;
  margin: 0 0 20px;
  font-size: 0.9rem;
`;

export const FeatButton = styled.button`
  background-color: ${({ theme }) => theme.secondary};
  border: none;
  padding: 14px 24px;
  border-radius: 6px;
  box-shadow: 1px 2px 3px #00000022, 1px 2px 9px #00000022;
  transition: all 0.2s;
  cursor: pointer;
  outline: none;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transition: all 0.1s;
    transform: scale(0.9);
  }
`;

export const TourList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const TourItem = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 20px;
  box-shadow: 1px 2px 7px #00000044, 1px 2px 14px #00000044;
  position: relative;
  bottom: 0px;
  transition: all 0.2s;
  display: flex;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    bottom: 2px;
    box-shadow: 3px 7px 7px #00000033, 3px 7px 14px #00000033;
  }

  &:active {
    transition: all 0.1s;
    bottom: 0px;
    box-shadow: 1px 2px 7px #00000044, 1px 2px 14px #00000044;
  }
`;

export const ItemBand = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
`;

export const ItemDates = styled.div`
  background-color: ${({ theme }) => theme.backgroundLight};
  padding: 3px 6px;
  border-radius: 6px;
  font-size: 0.9rem;
`;

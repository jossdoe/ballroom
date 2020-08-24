import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`;

export const TitleFlex = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;

  a {
    color: inherit;
    text-decoration: none;
  }

  h2 {
    flex: 1;
  }

  aside {
    display: flex;
    align-items: center;
    position: relative;
    top: 10px;
    color: ${({ theme }) => theme.colorDark};
    transition: all 0.2s;
    cursor: pointer;
  }

  aside:hover {
    color: ${({ theme }) => theme.color};
  }
`;

import styled from 'styled-components';
export const Container = styled.div`
  width: 390px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1136px) {
    width: 1136px;
  }
`;

export const CardsList = styled.ul`
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin-left: calc(-1 * 48px);
    margin-top: calc(-1 * 39px);
  }
`;

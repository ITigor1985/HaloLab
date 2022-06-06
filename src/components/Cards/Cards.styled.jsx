import styled from 'styled-components';
export const Container = styled.div`
  width: 390px;
  padding-top: 30px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 768px;
    padding-top: 80px;
  }
  @media screen and (min-width: 1136px) {
    width: 1136px;
    padding-top: 104px;
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

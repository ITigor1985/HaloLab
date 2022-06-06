import styled from 'styled-components';
export const Container = styled.div`
  width: 1136px;
  margin: 0 auto;
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

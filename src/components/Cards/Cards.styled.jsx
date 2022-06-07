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
    margin-bottom: 70px;
  }
`;

export const BtnCheap = styled.button`
  display: block;
  margin: 0 auto;
  color: #fff;
  padding: 16px 48px;
  background: #50daa8;
  border-radius: 16px;
  border: none;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;
`;

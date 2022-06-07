import styled from 'styled-components';

export const CardContainer = styled.li`
  width: 352px;
  height: 256px;
  padding: 32px;
  background-color: white;
  border-radius: 24px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  :hover {
    box-shadow: 24px 24px 40px rgba(75, 207, 160, 0.08);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-right: 0;
    flex-basis: calc(100% / 2 - 48px);
    margin-left: 48px;
    margin-top: 39px;
  }
  @media screen and (min-width: 1200px) {
    flex-basis: calc(100% / 3 - 48px);
  }
`;

export const Category = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  opacity: 0.5;
  margin-bottom: 8px;
`;

export const Name = styled.p`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.02em;
  margin-bottom: 40px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.p`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 60px;
  line-height: 72px;
  letter-spacing: -0.02em;
`;

export const Currensy = styled.span`
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: -0.02em;
  margin-right: 4px;
`;

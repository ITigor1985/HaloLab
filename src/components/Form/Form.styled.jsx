import styled from 'styled-components';

export const FormContact = styled.form`
  display: flex;
  width: 100%;
  margin-top: 32px;
  flex-direction: column;
`;

export const InputName = styled.input`
  height: 56px;
  margin-bottom: 16px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  padding-left: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: rgba(0, 0, 0, 0.5);
  }
  :-ms-input-placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const InputNumber = styled.input`
  height: 56px;
  margin-bottom: 32px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  padding-left: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;

  ::placeholder,
  ::-webkit-input-placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: rgba(0, 0, 0, 0.5);
  }
  :-ms-input-placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const BtnSubmit = styled.button`
  padding: 16px 103px;
  background: #4bcfa0;
  border-radius: 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
  :hover {
    background: #50daa8;
  }
`;

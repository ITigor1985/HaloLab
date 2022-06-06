import { Btn } from './BtnBuy.styled';

const BtnBuy = ({ onClick }) => {
  return (
    <Btn type="button" onClick={onClick}>
      Buy
    </Btn>
  );
};

export default BtnBuy;

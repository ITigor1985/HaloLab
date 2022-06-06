import BtnBuy from 'components/BtnBuy';
import {
  CardContainer,
  Category,
  Container,
  Currensy,
  Name,
  Price,
} from './Card.styled';

const Card = props => {
  const { name, price, category } = props.item;

  return (
    <CardContainer>
      <Category>{category}</Category>
      <Name>{name}</Name>
      <Container>
        <Price>
          <Currensy>&#36;</Currensy>
          {price}
        </Price>
        <BtnBuy />
      </Container>
    </CardContainer>
  );
};
export default Card;

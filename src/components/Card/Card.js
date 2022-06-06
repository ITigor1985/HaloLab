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
  const { modalOpen } = props;
  return (
    <CardContainer>
      <Category>{category}</Category>
      <Name>{name}</Name>
      <Container>
        <Price>
          <Currensy>&#36;</Currensy>
          {price}
        </Price>
        <BtnBuy
          type="button"
          onClick={event => modalOpen(name, category, price, event)}
        />
      </Container>
    </CardContainer>
  );
};
export default Card;

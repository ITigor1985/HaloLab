import { getCards } from 'api/api';
import { useState, useEffect } from 'react';
import Card from '../Card';
import { CardsList, Container } from './Cards.styled';

const Cards = () => {
  let [cards, setCards] = useState([]);

  useEffect(() => {
    const getCardsItem = async () => {
      try {
        const data = await getCards();
        console.log(data);
        const cards = data.map(({ name, category, price }) => {
          return { name, category, price };
        });
        setCards(cards);
      } catch (error) {
        console.log(error);
      }
    };
    getCardsItem();
  }, []);

  return (
    <Container>
      <CardsList>
        {cards.map(item => {
          return <Card item={item} key={item.name} />;
        })}
      </CardsList>
    </Container>
  );
};

export default Cards;

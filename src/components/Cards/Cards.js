import { getCards } from 'api/api';
import { useState, useEffect } from 'react';
import Card from '../Card';
import { BtnCheap, CardsList, Container } from './Cards.styled';

const Cards = ({ modalOpen }) => {
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

  const getMinPrice = e => {
    const minCost = cards.reduce(
      (min, p) => (p.price < min ? p.price : min),
      cards[0].price
    );
    const minPrice = cards.filter(card => card.price === minCost);
    minPrice.map(card => modalOpen(card.category, card.name, card.price, e));
  };

  return (
    <Container>
      {cards.length > 0 && (
        <>
          <CardsList>
            {cards.map(item => {
              return <Card item={item} key={item.name} modalOpen={modalOpen} />;
            })}
          </CardsList>
          <BtnCheap type="button" onClick={e => getMinPrice(e)}>
            Buy cheapest
          </BtnCheap>
        </>
      )}
    </Container>
  );
};

export default Cards;

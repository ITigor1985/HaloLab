import { getCards } from 'api/api';
import { useState, useEffect } from 'react';
import Card from '../Card';

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
    <ul>
      {cards.map(item => {
        return <Card item={item} key={item.name} />;
      })}
    </ul>
  );
};

export default Cards;

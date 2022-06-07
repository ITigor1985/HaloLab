import { useState } from 'react';
import Cards from './Cards';
import Modal from './Modal';

export const App = () => {
  const [modalName, setName] = useState('');
  const [modalCategory, setCategory] = useState('');
  const [modalPrice, setPrice] = useState('');

  const modalOpen = (modalName, modalCategory, modalPrice, event) => {
    event.preventDefault();
    setName(modalName);
    setCategory(modalCategory);
    setPrice(modalPrice);
  };

  const modalClose = e => {
    if (e.currentTarget === e.target) {
      setName('');
      setCategory('');
      setPrice('');
    }
  };
  const modalCloseBtn = e => {
    setName('');
    setCategory('');
    setPrice('');
  };

  return (
    <>
      <Cards modalOpen={modalOpen} />
      {modalName && (
        <Modal
          modalName={modalName}
          modalCategory={modalCategory}
          modalPrice={modalPrice}
          onClick={modalClose}
          modalCloseBtn={modalCloseBtn}
        />
      )}
    </>
  );
};

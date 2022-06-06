import { Category, Currensy, Name, Price } from 'components/Card/Card.styled';
import { ModalWindow, Overlay } from './Modal.styled';

const Modal = ({ modalName, modalCategory, modalPrice, onClick }) => {
  return (
    <Overlay onClick={onClick}>
      <ModalWindow>
        <Category>{modalCategory}</Category>
        <Name>{modalName}</Name>
        <Price>
          <Currensy>&#36;</Currensy>
          {modalPrice}
        </Price>
      </ModalWindow>
    </Overlay>
  );
};
export default Modal;

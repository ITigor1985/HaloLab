import { Category, Currensy, Name, Price } from 'components/Card/Card.styled';
import Form from 'components/Form';
import { BtnCloseModal, ImgClose, ModalWindow, Overlay } from './Modal.styled';

const Modal = ({
  modalName,
  modalCategory,
  modalPrice,
  onClick,
  modalCloseBtn,
}) => {
  return (
    <Overlay onClick={event => onClick(event)}>
      <ModalWindow>
        <Category>{modalCategory}</Category>
        <Name>{modalName}</Name>
        <Price>
          <Currensy>&#36;</Currensy>
          {modalPrice}
        </Price>
        <Form />
        <BtnCloseModal type="button" onClick={modalCloseBtn}>
          <ImgClose />
        </BtnCloseModal>
      </ModalWindow>
    </Overlay>
  );
};
export default Modal;

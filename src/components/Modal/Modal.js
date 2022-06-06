import './modal.css';

const Modal = ({ modalName, modalCategory, modalPrice, onClick }) => {
  console.log(modalName);
  return (
    <div className="overlay" onClick={onClick}>
      <div className="modal">
        <p>{modalName}</p>
        <p>{modalCategory}</p>
        <p>{modalPrice}</p>
      </div>
    </div>
  );
};
export default Modal;

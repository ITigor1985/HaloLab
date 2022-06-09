import { postContact } from 'api/api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useInpute } from './customHooks/customHooks';
import {
  BtnSubmit,
  FormContact,
  InputContainer,
  InputError,
  InputName,
  InputNumber,
} from './Form.styled';

let item = {};

const positionToast = () => {
  return { position: toast.POSITION.TOP_CENTER };
};

const Form = () => {
  const name = useInpute('', { isEmpty: true, onlyLetter: true });
  const phone = useInpute('', {
    isEmpty: true,
    length: 12,
    onlyNumber: true,
  });

  const handleSubmit = (nameValidError, phoneValidError, evt) => {
    evt.preventDefault();
    if (!nameValidError || !phoneValidError) {
      toast.warn(
        'Not all fields are filled or filled out incorrectly',
        positionToast()
      );
      return;
    }
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;
    item = { name, phone };
    postContact(item);
    console.log(item);
    toast.success('Contacts add!', positionToast());
  };

  return (
    <FormContact
      onSubmit={e => handleSubmit(name.inputValid, phone.inputValid, e)}
    >
      {name.isDirty && name.onlyLetter && (
        <InputError>Only letters allowed</InputError>
      )}
      {name.isDirty && name.isEmpty && (
        <InputError>This field in required</InputError>
      )}

      <InputContainer
        borderColor={name.isDirty && (name.inputValid ? 'green' : 'red')}
      >
        <InputName
          onChange={e => name.onChange(e)}
          onBlur={e => name.onBlur(e)}
          value={name.value}
          name="name"
          type="text"
          placeholder="Name"
          borderColor={name.isDirty && (name.inputValid ? 'green' : 'red')}
        />
      </InputContainer>

      {phone.isDirty && phone.isEmpty && (
        <InputError>This field in required</InputError>
      )}
      {phone.isDirty && phone.lengthError && (
        <InputError>Should contain 12 characters</InputError>
      )}
      {phone.isDirty && phone.onlyNumber && (
        <InputError>Only numbers allowed</InputError>
      )}

      <InputContainer
        borderColor={phone.isDirty && (phone.inputValid ? 'green' : 'red')}
      >
        <InputNumber
          onChange={e => phone.onChange(e)}
          onBlur={e => phone.onBlur(e)}
          value={phone.value}
          name="phone"
          type="tel"
          placeholder="Phone"
          borderColor={phone.isDirty && (phone.inputValid ? 'green' : 'red')}
        />
      </InputContainer>
      <BtnSubmit type="submit">Submit</BtnSubmit>
      <ToastContainer />
    </FormContact>
  );
};
export default Form;

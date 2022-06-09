import { postContact } from 'api/api';
import { useInpute } from './customHooks/customHooks';
import {
  BtnSubmit,
  FormContact,
  InputError,
  InputName,
  InputNumber,
} from './Form.styled';

let item = {};

const Form = () => {
  const name = useInpute('', { isEmpty: true, onlyLetter: true });
  console.log(name);
  const phone = useInpute('', {
    isEmpty: true,
    length: 12,
    onlyNumber: true,
  });

  const handleSubmit = (nameValidError, phoneValidError, evt) => {
    evt.preventDefault();

    if (!nameValidError || !phoneValidError) {
      return;
    }
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;
    item = { name, phone };
    postContact(item);
    console.log(name, phone);
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

      <InputName
        onChange={e => name.onChange(e)}
        onBlur={e => name.onBlur(e)}
        value={name.value}
        name="name"
        type="text"
        placeholder="Name"
        borderColor={name.isDirty && (name.inputValid ? 'green' : 'red')}
      />

      {phone.isDirty && phone.isEmpty && (
        <InputError>This field in required</InputError>
      )}
      {phone.isDirty && phone.lengthError && (
        <InputError>Should contain 12 characters</InputError>
      )}
      {phone.isDirty && phone.onlyNumber && (
        <InputError>Only numbers allowed</InputError>
      )}

      <InputNumber
        onChange={e => phone.onChange(e)}
        onBlur={e => phone.onBlur(e)}
        value={phone.value}
        name="phone"
        type="tel"
        placeholder="Phone"
        borderColor={phone.isDirty && (phone.inputValid ? 'green' : 'red')}
      />

      <BtnSubmit type="submit">Submit</BtnSubmit>
    </FormContact>
  );
};
export default Form;

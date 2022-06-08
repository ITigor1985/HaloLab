import { useInpute } from './customHooks/customHooks';
import { BtnSubmit, FormContact, InputName, InputNumber } from './Form.styled';

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
      return;
    }
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;
    console.log(name, phone);
  };

  return (
    <FormContact
      onSubmit={e => handleSubmit(name.inputValid, phone.inputValid, e)}
    >
      {name.isDirty && name.onlyLetter && <div>Only letters allowed</div>}
      {name.isDirty && name.isEmpty && <div>This field in required</div>}

      <InputName
        onChange={e => name.onChange(e)}
        onBlur={e => name.onBlur(e)}
        value={name.value}
        name="name"
        type="text"
        placeholder="Name"
        borderColor={name.styleOption}
      />

      {phone.isDirty && phone.isEmpty && <div>This field in required</div>}
      {phone.isDirty && phone.lengthError && (
        <div>Should contain 12 characters</div>
      )}
      {phone.isDirty && phone.onlyNumber && <div>Only numbers allowed</div>}

      <InputNumber
        onChange={e => phone.onChange(e)}
        onBlur={e => phone.onBlur(e)}
        value={phone.value}
        name="phone"
        type="tel"
        placeholder="Phone"
        borderColor={phone.styleOption}
      />

      <BtnSubmit type="submit">Submit</BtnSubmit>
    </FormContact>
  );
};
export default Form;

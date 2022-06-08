import { useEffect } from 'react';
import { useState } from 'react';
import { BtnSubmit, FormContact, InputName, InputNumber } from './Form.styled';

const useValidation = (value, validations) => {
  const [onlyNumber, setOnlyNumber] = useState(true);
  const [onlyLetter, setOnlyLetter] = useState(true);
  const [isEmpty, setEmpty] = useState(true);
  const [lengthError, setLengthError] = useState(true);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true);
          break;
        case 'length':
          value.length !== validations[validation]
            ? setLengthError(true)
            : setLengthError(false);

          break;
        case 'onlyLetter':
          /^[a-zA-Zа-яёА-ЯЁ]+$/u.test(value)
            ? setOnlyLetter(false)
            : setOnlyLetter(true);
          break;
        case 'onlyNumber':
          /^[0-9]+$/u.test(value) ? setOnlyNumber(false) : setOnlyNumber(true);
          break;
        default:
          return;
      }
    }
  }, [validations, value]);

  return { isEmpty, lengthError, onlyLetter, onlyNumber };
};

const useInpute = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = e => {
    setValue(e.target.value);
  };

  const onBlur = e => {
    setDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};

const Form = () => {
  const name = useInpute('', { isEmpty: true, onlyLetter: true });
  const phone = useInpute('', {
    isEmpty: true,
    length: 12,
    onlyNumber: true,
  });
  console.log(phone);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;
    console.log(name, phone);
  };

  return (
    <FormContact onSubmit={handleSubmit}>
      {name.isDirty && name.onlyLetter && <div>Only letters allowed</div>}
      {name.isDirty && name.isEmpty && <div>This field in required</div>}
      <InputName
        onChange={e => name.onChange(e)}
        onBlur={e => name.onBlur(e)}
        value={name.value}
        name="name"
        type="text"
        placeholder="Name"
        required
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
        required
      />

      <BtnSubmit type="submit">Submit</BtnSubmit>
    </FormContact>
  );
};
export default Form;

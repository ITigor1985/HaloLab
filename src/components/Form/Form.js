import { useEffect } from 'react';
import { useState } from 'react';
import { BtnSubmit, FormContact, InputName, InputNumber } from './Form.styled';

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [lengthError, setLengthError] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true);
          break;
        case 'length':
          value.length !== validations[validation]
            ? setLengthError(true)
            : setLengthError(false);
          break;
        default:
          return;
      }
    }
  }, [validations, value]);

  return { isEmpty, minLengthError, lengthError };
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
  const name = useInpute('', { isEmpty: true, minLength: 3 });
  const phone = useInpute('', { isEmpty: true, length: 12 });

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;
    console.log(name, phone);
    form.reset();
  };

  return (
    <FormContact onSubmit={handleSubmit}>
      {name.isDirty && name.isEmpty && <div>This field in required</div>}
      {name.isDirty && name.minLengthError && <div>is empty</div>}

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

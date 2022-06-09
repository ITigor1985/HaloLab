import { useEffect, useState } from 'react';

export const useValidation = (value, validations) => {
  const [onlyNumber, setOnlyNumber] = useState(false);
  const [onlyLetter, setOnlyLetter] = useState(false);
  const [isEmpty, setEmpty] = useState(true);
  const [lengthError, setLengthError] = useState(false);
  const [inputValid, setInputeValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'onlyNumber':
          /^[0-9]+$/u.test(value) ? setOnlyNumber(false) : setOnlyNumber(true);
          break;
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
        default:
          return;
      }
    }
  }, [validations, value]);

  useEffect(() => {
    if (isEmpty || lengthError || onlyLetter || onlyNumber) {
      setInputeValid(false);
    } else {
      setInputeValid(true);
    }
  }, [isEmpty, lengthError, onlyLetter, onlyNumber]);

  return {
    isEmpty,
    lengthError,
    onlyLetter,
    onlyNumber,
    inputValid,
  };
};

export const useInpute = (initialValue, validations) => {
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

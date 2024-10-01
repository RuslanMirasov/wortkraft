import { useState, useEffect } from 'react';
import { validateInput } from '../../../utils/formValidation';
import {
  InputCheckbox,
  InputHidden,
  InputRadio,
  InputSelect,
  InputText,
  InputTextarea,
  InputFile,
} from '../../../components';

const Input = ({
  type,
  icon,
  name,
  required,
  label,
  placeholder,
  value = '',
  options,
  min,
  max,
  checked = false,
  onChange,
  resetInputs,
  disabled,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [inputChecked, setInputChecked] = useState(checked);

  useEffect(() => {
    if (resetInputs && type !== 'hidden') {
      setInputValue('');
      setInputChecked(false);
    }
  }, [resetInputs]);

  const handleChange = e => {
    validateInput(e.target);
    setInputValue(e.target.value);
    setInputChecked(e.target.checked);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <>
      {type === 'hidden' ? (
        <InputHidden type={type} name={name} value={inputValue} />
      ) : type === 'textarea' ? (
        <InputTextarea
          name={name}
          value={inputValue}
          label={label}
          placeholder={placeholder}
          required={required}
          onChange={handleChange}
        />
      ) : type === 'radio' ? (
        <InputRadio
          type={type}
          name={name}
          label={label}
          value={inputValue}
          required={required}
          onChange={handleChange}
        />
      ) : type === 'checkbox' ? (
        <InputCheckbox
          type={type}
          name={name}
          label={label}
          value={inputValue}
          checked={inputChecked}
          required={required}
          onChange={handleChange}
        />
      ) : type === 'select' ? (
        <InputSelect
          name={name}
          label={label}
          placeholder={placeholder}
          required={required}
          options={options}
          value={inputValue}
          onChange={handleChange}
        />
      ) : type === 'file' ? (
        <InputFile type={type} name={name} onChange={onChange} value={inputValue} />
      ) : (
        <InputText
          type={type}
          icon={icon}
          name={name}
          label={label}
          value={inputValue}
          required={required}
          placeholder={placeholder}
          min={min}
          max={max}
          disabled={disabled}
          onChange={handleChange}
        />
      )}
    </>
  );
};

export default Input;

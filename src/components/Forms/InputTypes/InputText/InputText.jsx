import { useState } from 'react';
import { Icon } from '../../../../components';
import css from './InputText.module.scss';

const InputText = ({ type, icon, name, value, label, required, placeholder, min, max, disabled, onChange }) => {
  const [currentType, setCorrentType] = useState(type);
  const [iconName, setIconName] = useState(icon);

  const handleIconClick = () => {
    if (currentType === 'password') {
      setCorrentType('text');
      setIconName('password-show');
      return;
    }
    setCorrentType('password');
    setIconName('password-hide');
  };

  return (
    <label className={`${css.Label} ${disabled ? css.Disabled : ''}`}>
      {label && <span className={css.LabelText}>{label}</span>}
      <span className={css.LabelInput}>
        <input
          type={currentType}
          className={css.Input}
          name={name}
          value={value}
          required={required}
          placeholder={placeholder}
          min={min}
          max={max}
          onChange={onChange}
        />
        {icon && (
          <span
            className={css.InputIcon}
            onClick={name === 'password' || name === 'password2' ? handleIconClick : null}
          >
            <Icon name={iconName} />
          </span>
        )}
      </span>
    </label>
  );
};

export default InputText;

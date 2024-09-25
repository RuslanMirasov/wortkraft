import css from './InputText.module.scss';

const InputText = ({ type, name, value, label, required, placeholder, min, max, onChange }) => {
  return (
    <label className={css.Label}>
      {label && <span className={css.LabelText}>{label}</span>}
      <span className={css.LabelInput}>
        <input
          type={type}
          className={css.Input}
          name={name}
          value={value}
          required={required}
          placeholder={placeholder}
          min={min}
          max={max}
          onChange={onChange}
        />
      </span>
    </label>
  );
};

export default InputText;

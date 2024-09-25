import css from './../InputText/InputText.module.scss';

const Textarea = ({ label, name, value, required, placeholder, onChange }) => {
  return (
    <label className={css.Label}>
      {label && <span className={css.LabelText}>{label}</span>}
      <span className={css.LabelInput}>
        <textarea
          className={`${css.Input} ${css.Textarea}`}
          name={name}
          value={value}
          required={required}
          placeholder={placeholder}
          onChange={onChange}
        />
      </span>
    </label>
  );
};

export default Textarea;

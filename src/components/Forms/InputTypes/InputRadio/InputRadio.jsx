import css from './InputRadio.module.scss';

const InputRadio = ({ type, name, label, value, required, onChange }) => {
  return (
    <label className={css.RadioWrapper}>
      <input className={css.Radio} type={type} name={name} value={value} required={required} onChange={onChange} />
      {label && <span className={css.RadioLabel}>{label}</span>}
      <div className={`${css.Mark} ${css[`mark-${type}`]}`}></div>
    </label>
  );
};

export default InputRadio;

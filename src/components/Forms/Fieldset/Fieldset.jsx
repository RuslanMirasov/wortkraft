import css from './Fieldset.module.scss';

const Fieldset = ({ col = 'auto', label, children }) => {
  return (
    <fieldset className={`${css.Fieldset} ${css[`col-${col}`]}`}>
      {label && <legend className={css.FieldsetLabel}>{label}</legend>}
      {children}
    </fieldset>
  );
};

export default Fieldset;

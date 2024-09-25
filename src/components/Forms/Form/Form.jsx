
import { validateForm } from '../../../utils/formValidation';
import css from './Form.module.scss';

const Form = ({ children, onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const formErrors = validateForm(e.target);
    if (formErrors > 0) {
      return;
    }
    onSubmit && onSubmit(e);
  };

  return (
    <form action="#" method="post" className={css.Form} noValidate onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;

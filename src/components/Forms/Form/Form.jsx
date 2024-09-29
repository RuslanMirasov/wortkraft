import { validateForm } from '../../../utils/formValidation';
import css from './Form.module.scss';

const Form = ({ children, onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const formErrors = validateForm(e.target);
    if (formErrors > 0) {
      return;
    }

    const formData = new FormData(e.target);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });

    onSubmit && onSubmit(data);
  };

  return (
    <form action="#" method="post" className={css.Form} noValidate onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;

import React, { useState } from 'react';
import { validateForm } from '../../../utils/formValidation';
import css from './Form.module.scss';

const Form = ({ children, onSubmit, reset = false }) => {
  const [resetInputs, setResetInputs] = useState(false);

  const handleSubmit = async e => {
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

    if (onSubmit) {
      await onSubmit(data, e);
      if (reset) {
        setResetInputs(true);
        setTimeout(() => setResetInputs(false), 0);
      }
    }
  };

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { resetInputs });
    }
    return child;
  });

  return (
    <form action="#" className={css.Form} noValidate onSubmit={handleSubmit}>
      {childrenWithProps}
    </form>
  );
};

export default Form;

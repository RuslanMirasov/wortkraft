const useErrorTextMasseges = true;

const nameRegex = /[^A-zА-яЁё+ ()-]/;
const phoneRegex = /^\+49\d{9}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

const errors = {
  empty: 'Füllen Sie das Feld aus!',
  name: 'Name darf keine Ziffern enthalten!',
  phone: 'Falsches Telefon-Format!',
  email: 'Falsches E-Mail-Format!',
  password: 'Das Passwort muss Groß- und Kleinbuchstaben sowie Zahlen enthalten.',
  checkbox: 'Dieser Punkt ist wichtig!',
  radio: 'Keine der Optionen ist gewählt worden!',
  max: 'Maximalwert 20',
  min: 'Minimalwert 10',
};

export const validateInput = input => {
  let errorText = '';
  const currentInput = input;
  const inputWrapper = currentInput.type === 'radio' ? currentInput.closest('fieldset') : currentInput.closest('label');
  const textErrorEl = inputWrapper.querySelector('.labelError');

  // add Error
  const addError = text => {
    errorText = text;
    const currentInputs = inputWrapper.querySelectorAll('[required]');
    currentInputs.forEach(requiredInput => {
      requiredInput.classList.add('invalid');
      requiredInput.classList.remove('valid');
    });
    addErrorText(text);
  };

  // delete Error
  const deleteError = () => {
    currentInput.classList.remove('invalid');
    currentInput.classList.add('valid');
    deleteErrorText();
  };

  // add error Text
  const addErrorText = (text, value) => {
    if (useErrorTextMasseges) {
      const valeuText = value || '';
      if (textErrorEl) {
        textErrorEl.innerHTML = text;
        return;
      }
      inputWrapper.insertAdjacentHTML('beforeend', `<span class="labelError">${text} ${valeuText}</span>`);
      setTimeout(() => inputWrapper.querySelector('.labelError').classList.add('active'), 1);
    }
  };

  // delete error Text
  const deleteErrorText = () => {
    if (textErrorEl) {
      textErrorEl.classList.remove('active');
      setTimeout(() => {
        textErrorEl.remove();
      }, 300);
    }
  };

  // radios in grup validate
  const radiosValidate = () => {
    const allRadios = inputWrapper.querySelectorAll('input[type="radio"]');
    const checkedRadios = inputWrapper.querySelectorAll('input[type="radio"]:checked');

    if (checkedRadios.length) {
      allRadios.forEach(radio => {
        radio.classList.remove('invalid');
        radio.removeAttribute('required');
      });
      deleteErrorText();
      return;
    }
    addError(errors.radio);
  };

  // validate inputs by type
  if (currentInput.required) {
    if (currentInput.value.length === 0) {
      addError(errors.empty);
    } else if (currentInput.min && Number(currentInput.value) < currentInput.min) {
      addError(errors.min);
    } else if (currentInput.max && Number(currentInput.value) > currentInput.max) {
      addError(errors.max);
    } else {
      //Name
      if (currentInput.name === 'name' && nameRegex.test(currentInput.value)) {
        addError(errors.name);
      }
      //phone
      if (currentInput.type === 'tel' && !phoneRegex.test(currentInput.value)) {
        addError(errors.phone);
      }
      //email
      if (currentInput.type === 'email' && !emailRegex.test(currentInput.value)) {
        addError(errors.email);
      }
      //password
      if (currentInput.type === 'password' && !passwordRegex.test(currentInput.value)) {
        addError(errors.password);
      }
      //checkboxes
      if (currentInput.type === 'checkbox' && currentInput.checked === false) {
        addError(errors.checkbox);
      }
      //radio
      if (currentInput.type === 'radio') {
        radiosValidate();
      }
    }
  }

  if (!errorText) {
    deleteError();
  }

  return errorText;
};

// validate Form
export const validateForm = form => {
  let errorsCount = 0;
  const formData = form.querySelectorAll('[required]');
  formData.forEach(input => {
    const error = validateInput(input);
    if (error) {
      errorsCount += 1;
    }
  });
  return errorsCount;
};

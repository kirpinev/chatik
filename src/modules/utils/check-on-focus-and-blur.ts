import { Validation } from '../models';

export const checkInputsOnFocusAndBlur = (
  validation: Validation,
  form: string,
) => {
  const inputs = document.querySelector(form).querySelectorAll('input');

  inputs.forEach(input => {
    input.addEventListener('focus', event => {
      validation.validate(event);
    });

    input.addEventListener('change', event => {
      validation.validate(event);
    });

    input.addEventListener('blur', event => {
      validation.validate(event);
    });

    input.addEventListener('input', event => {
      validation.validate(event);
    });
  });
};

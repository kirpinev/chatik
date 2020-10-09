import { sanitize } from './sanitize';

import { Validation } from '../models';

export const checkOnSubmit = (validation: Validation, elem: string) => {
  const form = document.querySelector(elem);

  form.addEventListener('submit', event => {
    event.preventDefault();

    if (validation.checkAllInputs()) {
      const formData = Array.from(
        form.querySelectorAll('input') as NodeListOf<HTMLInputElement>,
      ).reduce((acc, curr) => {
        acc[curr.name] = sanitize(curr.value);

        return acc;
      }, {});

      console.log(formData);

      form.querySelector('input').value = '';

      validation.disableButton();
    }
  });
};

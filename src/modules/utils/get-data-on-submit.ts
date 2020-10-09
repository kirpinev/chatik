import { Validation } from '../models';

import { sanitize } from './sanitize';

export const getDataOnSubmit = (
  validation: Validation,
  elem: string,
): { status: boolean; data?: object } => {
  const form = document.querySelector(elem);

  if (validation.checkAllInputs()) {
    const data = Array.from(
      form.querySelectorAll('input') as NodeListOf<HTMLInputElement>,
    ).reduce((acc, curr) => {
      acc[curr.name] = sanitize(curr.value);

      return acc;
    }, {});

    return { status: true, data };
  }

  return { status: false };
};

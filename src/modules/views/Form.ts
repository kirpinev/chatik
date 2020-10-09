import { Block } from '../models';

import { FormPropTypes } from '../../types';

import { FormInterface } from '../../interfaces';

export class Form extends Block implements FormInterface {
  constructor(data: Record<string, string>, protected props: FormPropTypes) {
    super('div', data);
  }

  setInitialListeners(): void {
    this.props.checkInputsOnFocusAndBlur(
      this.props.validation,
      this.props.form,
    );
  }

  removeTextAndErrors(): void {
    this.removeInputText();

    this.removeErrors();
  }

  removeInputText(): void {
    const inputs = document.querySelectorAll(
      `${this.props.form} input`,
    ) as NodeListOf<HTMLInputElement>;

    inputs.forEach(input => {
      input.value = '';
    });
  }

  removeErrors(): void {
    const errors = document.querySelectorAll(
      `${this.props.form} .error`,
    ) as NodeListOf<HTMLElement>;

    errors.forEach(error => (error.textContent = ''));
  }

  disableButton(): void {
    document
      .querySelector(`${this.props.form} button[type="submit"]`)
      .setAttribute('disabled', 'true');
  }

  setRouter(form: string, button: string, path: string): void {
    const targetForm = document.querySelector(form) as HTMLElement;

    targetForm.addEventListener('click', event => {
      const target = event.target as HTMLElement;

      if (target.getAttribute('id') === button) {
        this.props.router.go(path);

        this.removeTextAndErrors();

        this.disableButton();
      }
    });
  }
}

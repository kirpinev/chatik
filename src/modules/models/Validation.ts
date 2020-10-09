import { ErrorsInterface, ValidationInterface } from '../../interfaces';

export class Validation implements ValidationInterface {
  constructor(protected errors: ErrorsInterface, protected form: string) {}

  validate(event: Event): void {
    this.checkValidity(event);

    if (this.checkAllInputs()) {
      this.activateButton();
    } else {
      this.disableButton();
    }
  }

  checkValidity(event): void {
    const err = document.querySelector(`${this.form} #${event.target.name}`);

    const isValidityLengthAndErrTrue =
      !event.target.validity.valid && event.target.value.length > 0 && err;

    if (event.target.value.length === 0 && err) {
      err.textContent = this.errors.ru.emptyInput;

      this.disableButton();
    } else if (isValidityLengthAndErrTrue) {
      err.textContent = this.errors.ru[event.target.type];

      this.disableButton();
    } else {
      this.removeErrors(event);
    }
  }

  checkAllInputs(): boolean {
    const inputs = document.querySelectorAll(
      `${this.form} input`,
    ) as NodeListOf<HTMLInputElement>;

    return Array.from(inputs).every(input => input.validity.valid === true);
  }

  removeErrors(event): void {
    const err = document.querySelector(`${this.form} #${event.target.name}`);

    if (err) {
      err.textContent = '';
    }
  }

  disableButton(): void {
    document
      .querySelector(`${this.form} button[type="submit"]`)
      .setAttribute('disabled', 'true');
  }

  activateButton(): void {
    document
      .querySelector(`${this.form} button[type="submit"]`)
      .removeAttribute('disabled');
  }
}

export interface ValidationInterface {
  validate(event: Event): void;
  checkValidity(event: Event): void;
  checkAllInputs(): boolean;
  removeErrors(event: Event): void;
  disableButton(): void;
  activateButton(): void;
}

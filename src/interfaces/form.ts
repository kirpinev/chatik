export interface FormInterface {
  setInitialListeners(): void;
  show(): void;
  hide(): void;
  removeTextAndErrors(): void;
  removeInputText(): void;
  removeErrors(): void;
  disableButton(): void;
  setRouter(form: string, button: string, path: string): void;
}

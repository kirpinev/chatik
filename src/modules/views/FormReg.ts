import { Form } from './Form';

import { Templator } from '../models';
import { reg as regTempl } from '../../templates/reg.jumbo';

export class FormReg extends Form {
  render(): string {
    return new Templator(regTempl).compile(this.data);
  }

  setListeners(): void {
    this.setInitialListeners();

    this.submit();

    this.setRouter(this.props.form, this.props.button, this.props.path.auth);
  }

  submit(): void {
    const form = document.querySelector(this.props.form);

    form.addEventListener('submit', event => {
      event.preventDefault();

      const formData = this.props.getDataOnSubmit(
        this.props.validation,
        this.props.form,
      );

      if (formData.status) {
        this.signUp(formData.data, form);
      }
    });
  }

  async signUp(data: object, form: Element) {
    try {
      const res = await this.props.authApi.signUp(data);

      if (res.status === 200) {
        this.props.router.go(this.props.path.chat);

        this.removeTextAndErrors();

        this.disableButton();
      } else {
        form.querySelector(this.props.error).textContent = JSON.parse(
          res.response,
        ).reason;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

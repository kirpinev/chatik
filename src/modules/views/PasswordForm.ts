import { Form } from './Form';

import { Templator } from '../models';
import { pass as passTempl } from '../../templates/pass.jumbo';

export class PasswordForm extends Form {
  render(): string {
    return new Templator(passTempl).compile(this.data);
  }

  setListeners(): void {
    this.setInitialListeners();

    this.submit();

    this.setRouter();
  }

  setRouter(): void {
    const formReg = document.querySelector(this.props.form) as HTMLElement;

    formReg.addEventListener('click', event => {
      const target = event.target as HTMLElement;

      if (target.getAttribute('id') === 'pass-form') {
        this.props.router.go(this.props.path.chat);

        this.removeTextAndErrors();

        this.disableButton();
      }
    });
  }

  submit(): void {
    const form = document.querySelector(this.props.form);

    form.addEventListener('submit', async event => {
      event.preventDefault();

      const formData = this.props.getDataOnSubmit(
        this.props.validation,
        this.props.form,
      );

      try {
        const updatePass = await this.props.userApi.updatePass(formData.data);

        if (updatePass.status === 200) {
          const logout = await this.props.authApi.logout();

          if (logout.status === 200) {
            this.props.router.go(this.props.path.auth);

            this.removeTextAndErrors();

            this.disableButton();
          }
        } else {
          form.querySelector(this.props.error).textContent =
            updatePass.response;
        }
      } catch (error) {
        console.log(error);
      }
    });
  }
}

import { Form } from './Form';

import { Templator } from '../models';
import { avaForm as avaTempl } from '../../templates/ava-form.jumbo';

export class AvatarForm extends Form {
  render(): string {
    return new Templator(avaTempl).compile(this.data);
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

      if (target.getAttribute('id') === 'ava-form') {
        this.props.router.go(this.props.path.chat);
      }
    });
  }

  submit(): void {
    const avatarForm = document.querySelector(this.props.form);

    avatarForm.addEventListener('submit', event => {
      event.preventDefault();

      const formData = this.props.getDataOnSubmit(
        this.props.validation,
        this.props.form,
      );

      if (formData.status) {
        this.updateAvatar(avatarForm);
      }
    });
  }

  async updateAvatar(form: Element) {
    try {
      const res = await this.props.userApi.updateAvatar(form);

      if (res.status === 200) {
        this.props.router.go(this.props.path.chat);

        this.removeTextAndErrors();

        this.disableButton();
      } else {
        form.querySelector(this.props.error).textContent = res.response;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

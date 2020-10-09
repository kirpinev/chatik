import { Form } from './Form';

import { Templator } from '../models';
import { chatForm as newChatTempl } from '../../templates/chat-form.jumbo';

export class ChatForm extends Form {
  render(): string {
    return new Templator(newChatTempl).compile(this.data);
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

      if (target.getAttribute('id') === this.props.button) {
        this.props.router.go(this.props.path.chat);

        this.removeTextAndErrors();

        this.disableButton();
      }
    });
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
        this.createChat(formData.data, form);
      }
    });
  }

  async createChat(data: object, form: Element) {
    try {
      const res = await this.props.chatApi.createChat(data);

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

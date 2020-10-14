import { Form } from './Form';

import { Templator } from '../models';
import { chatInfoForm as chatInfoTempl } from '../../templates/chat-info-form.jumbo';

export class ChatAvatarForm extends Form {
  render(): string {
    return new Templator(chatInfoTempl).compile(this.data);
  }

  setListeners(): void {
    this.setInitialListeners();

    this.updateAvatar();

    this.setRouter();
  }

  setRouter(): void {
    const formChatAvatar = document.querySelector(
      this.props.form,
    ) as HTMLElement;

    formChatAvatar.addEventListener('click', event => {
      const target = event.target as HTMLElement;

      if (target.getAttribute('id') === 'chat-avatar-form') {
        this.props.router.go(this.props.path.chat);
      }
    });
  }

  updateAvatar() {
    const formChatAvatar = document.querySelector(
      this.props.form,
    ) as HTMLFormElement;

    formChatAvatar.addEventListener('submit', async event => {
      event.preventDefault();

      const formData = this.props.getDataOnSubmit(
        this.props.validation,
        this.props.form,
      );

      const avatarData = new FormData(formChatAvatar);

      avatarData.append('chatId', localStorage.chatId);

      if (formData.status) {
        try {
          const res = await this.props.chatApi.updateChatAvatar(avatarData);

          console.log(res.response);
        } catch (error) {
          console.log(error);
        }
      }
    });
  }

  async setInfo() {
    try {
      const res = await this.props.chatApi.getChats();

      if (res.status === 200) {
        const { avatar } = JSON.parse(res.response);

        this.setProps({
          avatar: avatar
            ? `https://ya-praktikum.tech${avatar}`
            : 'https://dmitrovipoteka.ru/wp-content/uploads/2016/09/default-user-img.jpg',
        });

        this.setListeners();
      }
    } catch (error) {
      console.log(error);
    }
  }
}

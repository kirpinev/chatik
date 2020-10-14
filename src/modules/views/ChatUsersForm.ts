import { Form } from './Form';

import { ChatUserBadge } from './ChatUserBadge';

import { Templator } from '../models';
import { chatUsersForm as chatUsersTempl } from '../../templates/chat-users-form.jumbo';

import { addedMark } from '../constants/addedMark';

export class ChatUsersForm extends Form {
  private formChatUsers: HTMLElement;

  private container: HTMLElement;

  render(): string {
    return new Templator(chatUsersTempl).compile(this.data);
  }

  setListeners(): void {
    this.setRouter();

    this.findUsers();

    this.addUserToChat();
  }

  findUsers(): void {
    this.formChatUsers.addEventListener('input', async event => {
      const target = event.target as HTMLInputElement;

      this.container = document.querySelector('.form__users-container');

      this.container.innerHTML = '';

      if (target.value.length > 0) {
        try {
          const res = await this.props.userApi.searchUser({
            login: target.value,
          });

          const chatUsers = await this.props.chatApi.getChatUsers(
            localStorage.chatId,
          );

          if (res.status === 200 && chatUsers.status === 200) {
            JSON.parse(res.response).forEach(user => {
              user.avatar = user.avatar
                ? `https://ya-praktikum.tech${user.avatar}`
                : 'https://dmitrovipoteka.ru/wp-content/uploads/2016/09/default-user-img.jpg';

              const userBadge = new ChatUserBadge(user).getContent();

              JSON.parse(chatUsers.response).forEach(userInChat => {
                if (userInChat.id === user.id) {
                  const badgeButton = userBadge.querySelector('button');

                  badgeButton.innerHTML = '';

                  badgeButton.insertAdjacentHTML('beforeend', addedMark);

                  badgeButton.style.cursor = 'default';

                  badgeButton.setAttribute('disabled', 'true');
                }
              });

              this.container.appendChild(userBadge);
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  }

  addUserToChat(): void {
    this.formChatUsers.addEventListener('click', async event => {
      event.preventDefault();

      const target = event.target as HTMLElement;

      if (target.classList.contains('chat-user-badge__action')) {
        const userInfo = {
          users: [parseInt(target.parentElement.dataset.userId)],
          chatId: parseInt(localStorage.chatId),
        };

        try {
          const res = await this.props.chatApi.addUserToChat(userInfo);

          if (res.status === 200) {
            target.innerHTML = '';

            target.insertAdjacentHTML('beforeend', addedMark);
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  }

  setRouter(): void {
    this.formChatUsers = document.querySelector(this.props.form) as HTMLElement;

    this.formChatUsers.addEventListener('click', event => {
      const target = event.target as HTMLElement;

      if (target.getAttribute('id') === 'chat-users-form') {
        this.props.router.go(this.props.path.chat);

        this.removeInputText();

        if (this.container) {
          this.container.innerHTML = '';
        }
      }
    });
  }
}

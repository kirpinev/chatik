import { Block, Templator } from '../models';

import { ChatUserBadge } from './ChatUserBadge';

import { deleteMark } from '../constants/deleteMark';

import { chatInfo as chatInfoTempl } from '../../templates/chat-info.jumbo';

export class ChatInfo extends Block {
  constructor(public props) {
    super('section');
  }

  setListeners(): void {
    this.setRouter();

    this.removeUserFromChat();
  }

  render(): string {
    return new Templator(chatInfoTempl).compile(this.data);
  }

  setRouter(): void {
    const button = document.querySelector('.chat-info');

    button.addEventListener('click', event => {
      const target = event.target as HTMLElement;

      if (target.getAttribute('id') === 'chat-info-button-back') {
        this.props.router.go(this.props.path.chat);
      }
    });
  }

  removeUserFromChat() {
    const userInfo = document.querySelector('.chat-info');

    userInfo.addEventListener('click', async event => {
      const target = event.target as HTMLElement;

      if (target.classList.contains('chat-user-badge__action')) {
        const userDataObject = {
          users: [parseInt(target.parentElement.dataset.userId, 10)],
          chatId: parseInt(localStorage.chatId, 10),
        };

        const res = await this.props.chatApi.deleteUserFromChat(userDataObject);

        if (res.status === 200) {
          target.parentElement.parentElement.remove();
        }
      }
    });
  }

  async setInfo() {
    this.setProps({
      chatId: localStorage.chatId,
      chatAvatar: localStorage.chatAvatar,
      chatTitle: localStorage.chatTitle,
    });

    try {
      const res = await this.props.chatApi.getChatUsers(localStorage.chatId);

      const userInfo = await this.props.authApi.getUserInfo();

      if (res.status === 200 && userInfo.status === 200) {
        const container = document.querySelector('.chat-info__users');

        container.innerHTML = '';

        JSON.parse(res.response).forEach(user => {
          user.avatar = user.avatar
            ? `https://ya-praktikum.tech${user.avatar}`
            : 'https://dmitrovipoteka.ru/wp-content/uploads/2016/09/default-user-img.jpg';

          const userBadge = new ChatUserBadge(user).getContent();

          const badgeActionButton = userBadge.querySelector('button');

          if (JSON.parse(userInfo.response).id === user.id) {
            badgeActionButton.innerHTML = '';

            badgeActionButton.insertAdjacentHTML(
              'beforeend',
              '<span>you</span>',
            );

            badgeActionButton.setAttribute('disabled', 'true');

            badgeActionButton.style.cursor = 'default';
          } else {
            badgeActionButton.innerHTML = '';

            badgeActionButton.insertAdjacentHTML('beforeend', deleteMark);
          }

          container.appendChild(userBadge);
        });

        this.setListeners();
      }
    } catch (error) {
      console.log(error);
    }
  }
}

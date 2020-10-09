import { Message } from '../views';

import { ChatInterface } from '../../interfaces';

import { ChatPropTypes } from '../../types';

export class Chat implements ChatInterface {
  chat: HTMLElement;

  constructor(private readonly props: ChatPropTypes) {}

  getContent(): HTMLElement {
    this.chat = document.createElement('section');

    this.chat.classList.add('chat-view');
    this.chat.setAttribute('id', 'chat');
    this.chat.style.width = '100%';
    this.chat.style.display = 'flex';

    this.chat.appendChild(this.props.sideInterface.getContent());
    this.chat.appendChild(this.props.dialogInterface.getContent());

    this.setInfo();

    return this.chat;
  }

  setListeners(): void {
    this.props.checkInputsOnFocusAndBlur(
      this.props.validation,
      this.props.form,
    );

    this.props.checkOnSubmit(this.props.validation, this.props.form);

    this.openUserInfo();

    this.openChatDialog();
  }

  openUserInfo(): void {
    if (!this.chat) {
      return;
    }

    this.chat.addEventListener('click', event => {
      const target = event.target as HTMLElement;

      switch (target.getAttribute('id')) {
        case 'user-top-menu__info':
          this.props.router.go(this.props.path.userInfo);

          this.props.userInfo.setInfo();

          this.props.userInfo.setListeners();

          break;
        case 'user-top-menu__password':
          this.props.router.go(this.props.path.pass);

          break;
        case 'user-top-menu__avatar':
          this.props.router.go(this.props.path.ava);

          break;
        case 'user-top-menu__chat':
          this.props.router.go(this.props.path.newChat);

          break;

        default:
      }
    });
  }

  openChatDialog(): void {
    if (!this.chat) {
      return;
    }

    this.chat.addEventListener('click', async event => {
      const message = event.target as HTMLElement;

      const messageExists =
        message.classList.contains('message__wrapper') &&
        message.getAttribute('id');

      if (messageExists) {
        try {
          const data = await this.props.chatApi.getChats();

          JSON.parse(data.response).forEach(
            (chatInfo: { id: number; avatar: string | null }) => {
              const idsIsSame = chatInfo.id === +message.getAttribute('id');

              if (idsIsSame && !chatInfo.avatar) {
                this.props.dialogInterface.topInterface.setProps({
                  ...chatInfo,
                  avatar:
                    'https://dmitrovipoteka.ru/wp-content/uploads/2016/09/default-user-img.jpg',
                });
              } else if (idsIsSame && chatInfo.avatar) {
                this.props.dialogInterface.topInterface.setProps(chatInfo);
              }

              this.props.dialogInterface.interface.style.display =
                'block';
            },
          );
        } catch (error) {
          console.log(error);
        }
      }
    });
  }

  show(): void {
    this.chat.style.display = 'flex';
  }

  hide(): void {
    this.chat.style.display = 'none';
  }

  setInfo(): void {
    this.setAvatarAndName();

    this.setChatsMessages();
  }

  async setAvatarAndName() {
    try {
      const res = (await this.props.authApi.getUserInfo()) as {
        status: number;
        response: string;
      };

      if (res.status === 200) {
        const data = JSON.parse(res.response);

        this.props.sideInterface.avatar.setProps({
          name: data.display_name || 'Кто-то',
        });

        this.props.sideInterface.avatar.setProps({
          img: data.avatar
            ? `https://ya-praktikum.tech${data.avatar}`
            : 'https://dmitrovipoteka.ru/wp-content/uploads/2016/09/default-user-img.jpg',
        });
      } else {
        console.log(`Ошибка ${res.status}`);

        this.props.router.go('/auth');
      }
    } catch (error) {
      console.log(error);
    }
  }

  async setChatsMessages() {
    try {
      const res = (await this.props.chatApi.getChats()) as {
        status: number;
        response: string;
      };

      if (res.status === 200) {
        this.clearMessagesList();

        const data = JSON.parse(res.response);

        data.forEach((chat: { avatar: null | string }) => {
          const message = chat.avatar
            ? new Message(chat)
            : new Message({
              ...chat,
              avatar:
                'https://dmitrovipoteka.ru/wp-content/uploads/2016/09/default-user-img.jpg',
            });

          this.props.sideInterface.messagesList.wrapper.appendChild(
            message.getContent(),
          );
        });
      } else {
        console.log(`Ошибка: ${res.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  clearMessagesList(): void {
    this.props.sideInterface.messagesList.wrapper.innerHTML = '';
  }
}

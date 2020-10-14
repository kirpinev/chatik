import { Message, MessageIn, MessageOut } from '../views';

import { ChatInterface } from '../../interfaces';

import { ChatPropTypes } from '../../types';

export class Chat implements ChatInterface {
  chat: HTMLElement;

  private socket: WebSocket;

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

    this.openUserInfo();

    this.openChatInfo();

    this.openChatDialog();
  }

  openChatInfo(): void {
    if (!this.chat) {
      return;
    }

    this.chat.addEventListener('click', event => {
      const target = event.target as HTMLElement;

      if (target.getAttribute('id') === 'chat-avatar-button') {
        this.props.chatAvatarForm.setInfo();

        this.props.router.go(this.props.path.chatAvatar);
      } else if (target.getAttribute('id') === 'chat-add-users-button') {
        this.props.router.go(this.props.path.chatUsers);
      } else if (target.getAttribute('id') === 'chat-about-button') {
        this.props.chatInfo.setInfo();

        this.props.router.go(this.props.path.chatInfo);
      }
    });
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

    const container = document.querySelector('.messages-container__overflow');

    this.chat.addEventListener('click', async event => {
      const message = event.target as HTMLElement;

      const messageExists =
        message.classList.contains('message__wrapper') &&
        message.getAttribute('data-chat-id');

      if (messageExists) {
        container.innerHTML = '';
        try {
          const data = await this.props.chatApi.getChats();

          JSON.parse(data.response).forEach(
            (chatInfo: {
              id: number;
              avatar: string | null;
              title: string;
            }) => {
              const idsIsSame =
                chatInfo.id === +message.getAttribute('data-chat-id');

              if (idsIsSame && !chatInfo.avatar) {
                this.props.dialogInterface.topInterface.setProps({
                  ...chatInfo,
                  avatar:
                    'https://dmitrovipoteka.ru/wp-content/uploads/2016/09/default-user-img.jpg',
                });

                localStorage.chatId = chatInfo.id;

                localStorage.chatAvatar = chatInfo.avatar
                  ? chatInfo.avatar
                  : 'https://dmitrovipoteka.ru/wp-content/uploads/2016/09/default-user-img.jpg';

                localStorage.chatTitle = chatInfo.title;
              } else if (idsIsSame && chatInfo.avatar) {
                this.props.dialogInterface.topInterface.setProps(chatInfo);
              }

              this.props.dialogInterface.interface.style.display = 'block';
            },
          );

          this.setMessagesWebsocket();
        } catch (error) {
          console.log(error);
        }
      }
    });
  }

  async setMessagesWebsocket() {
    const userInfo = await this.props.authApi.getUserInfo();

    const userId = JSON.parse(userInfo.response).id;

    const tokenInfo = await this.props.chatApi.getChatToken(
      localStorage.chatId,
    );

    const token = JSON.parse(tokenInfo.response).token;

    this.socket = new WebSocket(
      `wss://ya-praktikum.tech/ws/chats/${userId}/${localStorage.chatId}/${token}`,
    );

    this.socket.addEventListener('open', () => {
      this.socket.send(
        JSON.stringify({
          content: '0',
          type: 'get old',
        }),
      );
    });

    this.socket.addEventListener('message', event => {
      console.log(event.data);

      this.fillMessages(event.data);
    });

    this.props.sendMessageOnSubmit(
      this.props.validation,
      this.props.form,
      this.socket,
      '',
    );
  }

  async fillMessages(data) {
    if (JSON.parse(data).type === 'user connected') {
      return;
    }

    const container = document.querySelector('.messages-container__overflow');

    const messagesList = Array.isArray(JSON.parse(data))
      ? JSON.parse(data).reverse()
      : [JSON.parse(data)];

    const userInfo = await this.props.authApi.getUserInfo();

    const userIdFromServer = JSON.parse(userInfo.response).id;

    for (let i = 0; i < messagesList.length; i += 1) {
      const userId = messagesList[i].user_id || messagesList[i].userId;

      const userDataInfo = await this.props.userApi.getUserById(userId);

      const userAvatar = JSON.parse(userDataInfo.response).avatar;

      messagesList[i].avatar = this.setAvatar(userAvatar);

      messagesList[i].time = this.getMessagesTime(messagesList[i].time);
    }

    this.fillChatWithMessages(messagesList, container, userIdFromServer);

    this.scrollToBottom(container);
  }

  getMessagesTime(time) {
    const newTime = new Date(time);

    const hours =
      newTime.getHours() < 10 ? `0${newTime.getHours()}` : newTime.getHours();

    const minutes =
      newTime.getMinutes() < 10
        ? `0${newTime.getMinutes()}`
        : newTime.getMinutes();

    return `${hours}:${minutes}`;
  }

  setAvatar(avatar: string): string {
    return avatar
      ? `https://ya-praktikum.tech${avatar}`
      : 'https://dmitrovipoteka.ru/wp-content/uploads/2016/09/default-user-img.jpg';
  }

  fillChatWithMessages(
    messages: any[],
    container: Element,
    userIdFromServer: string,
  ): void {
    messages.forEach(message => {
      const userId = message.user_id || message.userId;

      const res =
        userId !== +userIdFromServer
          ? new MessageIn(message)
          : new MessageOut(message);

      container.appendChild(res._element);
    });
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

        for (const chat1 of data) {
          const message = chat1.avatar
            ? new Message(chat1)
            : new Message({
              ...chat1,
              avatar:
                'https://dmitrovipoteka.ru/wp-content/uploads/2016/09/default-user-img.jpg',
            });

          this.props.sideInterface.messagesList.wrapper.appendChild(
            message.getContent(),
          );
        }
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

  show(): void {
    this.chat.style.display = 'flex';
  }

  hide(): void {
    this.chat.style.display = 'none';
  }

  setInfo(): void {
    this.setChatsMessages();

    this.setAvatarAndName();
  }

  scrollToBottom(div: Element): void {
    div.scrollTop += div.scrollHeight - div.clientHeight;
  }
}

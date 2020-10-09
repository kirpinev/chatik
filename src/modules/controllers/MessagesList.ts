import { MessageInterface } from '../../interfaces';

export class MessagesList implements MessageInterface {
  wrapper: HTMLDivElement;

  getContent(): HTMLElement {
    const messagesList = document.createElement('section');
    const header = document.createElement('h2');
    const wrapper = document.createElement('div');

    this.wrapper = wrapper;

    messagesList.classList.add('messages-list');
    header.classList.add('messages-list__title');
    wrapper.classList.add('messages-list__wrapper');

    header.textContent = 'Сообщения';

    messagesList.appendChild(header);
    messagesList.appendChild(wrapper);

    return messagesList;
  }
}

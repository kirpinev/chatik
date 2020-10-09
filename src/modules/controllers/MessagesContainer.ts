import { MessageInterface } from '../../interfaces';

export class MessagesContainer implements MessageInterface {
  wrapper: HTMLElement;

  getContent(): HTMLElement {
    const container = document.createElement('section');
    const wrapper = document.createElement('div');

    this.wrapper = wrapper;

    container.classList.add('messages-container');
    wrapper.classList.add('messages-container__overflow');

    container.appendChild(wrapper);

    return container;
  }
}

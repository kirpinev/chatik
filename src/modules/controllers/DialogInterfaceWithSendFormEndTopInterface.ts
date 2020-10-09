import { TopInterface, BottomInterface } from '../views';
import { MessagesContainer } from './MessagesContainer';

import { InterfaceWithSendFormEndTopInterface } from '../../interfaces';

export class DialogInterfaceWithSendFormEndTopInterface implements InterfaceWithSendFormEndTopInterface {
  interface: HTMLElement;

  constructor(
    public topInterface: TopInterface,
    public messagesContainer: MessagesContainer,
    public bottomInterface: BottomInterface,
  ) {}

  getContent(): HTMLElement {
    this.interface = document.createElement('section');

    this.interface.classList.add('chat');

    this.interface.style.display = 'none';

    this.interface.appendChild(this.topInterface.getContent());
    this.interface.appendChild(this.messagesContainer.getContent());
    this.interface.appendChild(this.bottomInterface.getContent());

    return this.interface;
  }
}

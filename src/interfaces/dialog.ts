import { BottomInterface, TopInterface } from '../modules/views';
import { MessagesContainer } from '../modules/controllers';

export interface InterfaceWithSendFormEndTopInterface {
  topInterface: TopInterface;
  messagesContainer: MessagesContainer;
  bottomInterface: BottomInterface;
  interface: HTMLElement;
  getContent(): HTMLElement;
}

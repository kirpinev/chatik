import { Block, Templator } from '../models';

import { messageOutTemplate } from '../../templates/message-out.jumbo';

export class MessageOut extends Block {
  constructor(data) {
    super('div', data);
  }

  render(): string {
    return new Templator(messageOutTemplate).compile(this.data);
  }
}

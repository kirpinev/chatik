import { Block, Templator } from '../models';

import { messageOutTemplate } from '../../templates/message-out.jumbo';

export class MessageOut extends Block {
  constructor() {
    super('div');
  }

  render(): string {
    return new Templator(messageOutTemplate).compile(this.data);
  }
}

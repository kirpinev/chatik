import { Block, Templator } from '../models';

import { messageInTemplate } from '../../templates/message-in.jumbo';

export class MessageIn extends Block {
  constructor(data) {
    super('div', data);
  }

  render() {
    return new Templator(messageInTemplate).compile(this.data);
  }
}

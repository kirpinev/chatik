import { Block, Templator } from '../models';

import { messageInTemplate } from '../../templates/message-in.jumbo';

export class MessageIn extends Block {
  constructor() {
    super('div');
  }

  render() {
    return new Templator(messageInTemplate).compile(this.data);
  }
}

import { Block, Templator } from '../models';

import { messageTemplate } from '../../templates/message.jumbo';

export class Message extends Block {
  constructor(props) {
    super('section', props);
  }

  render(): string {
    return new Templator(messageTemplate).compile(this.data);
  }
}

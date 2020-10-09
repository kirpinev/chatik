import { Block, Templator } from '../models';

import { chatTopInterfaceTemplate } from '../../templates/chat-top-interface.jumbo';

export class TopInterface extends Block {
  constructor() {
    super('section');
  }

  render(): string {
    return new Templator(chatTopInterfaceTemplate).compile(this.data);
  }
}

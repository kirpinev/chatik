import { Block, Templator } from '../models';

import { chatBottomTemplate } from '../../templates/chat-botton-interface.jumbo';

class BottomInterface extends Block {
  constructor() {
    super('section');
  }

  render(): string {
    return new Templator(chatBottomTemplate).compile(this.data);
  }
}

export { BottomInterface };

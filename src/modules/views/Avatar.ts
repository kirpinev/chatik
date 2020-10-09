import { Block, Templator } from '../models';

import { ava as avatarTempl } from '../../templates/ava.jumbo';

class Avatar extends Block {
  constructor() {
    super('section');
  }

  render(): string {
    return new Templator(avatarTempl).compile(this.data);
  }
}

export { Avatar };

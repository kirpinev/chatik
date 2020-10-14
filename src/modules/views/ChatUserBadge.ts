import { Block, Templator } from '../models';

import { chatUserBadge as chatUserTempl } from '../../templates/chat-user-badge.jumbo';

export class ChatUserBadge extends Block {
  constructor(props) {
    super('section', props);
  }

  render(): string {
    return new Templator(chatUserTempl).compile(this.data);
  }
}

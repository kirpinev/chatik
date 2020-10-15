import { Templator, Block } from '../models';

import { userInfoFromChat as userInfoTempl } from '../../templates/user-info-from-chat.jumbo';

export class UserInfoFromChat extends Block {
  constructor(private props) {
    super('section', props);
  }

  setListeners() {
    this.setRouter();
  }

  render(): string {
    return new Templator(userInfoTempl).compile(this.data);
  }

  setRouter() {
    const userInfo = document.querySelector('.user-info-from-chat');

    userInfo.addEventListener('click', event => {
      const target = event.target as HTMLElement;

      if (target.classList.contains('user-info-from-chat__button')) {
        this.props.router.go(this.props.path.chat);
      }
    });
  }
}

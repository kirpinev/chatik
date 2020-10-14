import { Block } from '../models';

import { ErrorPageInterface } from '../../interfaces';

import { PagePropTypes } from '../../types';

export class Page extends Block {
  private page: Element;

  constructor(data: ErrorPageInterface, protected props: PagePropTypes) {
    super('section', data);
  }

  setListeners(): void {
    this.page = document.querySelector(this.props.page);

    if (!this.page) {
      return;
    }

    this.page.addEventListener('click', event => {
      const target = event.target as HTMLElement;

      if (target.getAttribute('id') === 'chat-button') {
        this.props.router.go(this.props.path.chat);
      }
    });
  }
}

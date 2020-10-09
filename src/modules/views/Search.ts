import { Block, Templator } from '../models';

import { searchTemplate } from '../../templates/search.jumbo';

export class Search extends Block {
  constructor() {
    super('section');
  }

  render(): string {
    return new Templator(searchTemplate).compile(this.data);
  }
}

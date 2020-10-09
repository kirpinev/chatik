import { Block, Templator } from '../models';

import { fav as favoritesTempl } from '../../templates/fav.jumbo';

import { FavoritesPropTypes } from '../../types';

export class Favorites extends Block {
  constructor(props: FavoritesPropTypes) {
    super('section', props);
  }

  render(): string {
    return new Templator(favoritesTempl).compile(this.data);
  }
}

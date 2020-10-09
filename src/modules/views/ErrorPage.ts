import { Templator } from '../models';

import { Page } from './Page';

import { errPage } from '../../templates/err-page.jumbo';

export class ErrorPage extends Page {
  render(): string {
    return new Templator(errPage).compile(this.data);
  }
}

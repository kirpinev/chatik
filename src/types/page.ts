import { Router } from '../modules/models';
import { PathInterface } from '../interfaces';

export type PagePropTypes = {
  page: string;
  router: Router;
  path: PathInterface;
};

import { router } from './init-router';
import {
  reg,
  auth,
  userInfo,
  notFoundPage,
  errorPage,
  passForm,
  avaForm,
  chatForm,
} from './views';

import { chat } from './controllers';

router
  .use('/auth', auth)
  .use('/reg', reg)
  .use('/user-info', userInfo)
  .use('/chat', chat)
  .use('/not-found', notFoundPage)
  .use('/error', errorPage)
  .use('/pass', passForm)
  .use('/ava', avaForm)
  .use('/new-chat', chatForm);

export { router };

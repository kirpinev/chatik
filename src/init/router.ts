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
  chatAvatarForm,
  chatUsersForm,
  chatInfo,
  userInfoFromChat,
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
  .use('/new-chat', chatForm)
  .use('/chat-avatar', chatAvatarForm)
  .use('/chat-users', chatUsersForm)
  .use('/chat-info', chatInfo)
  .use('/user-info-from-chat', userInfoFromChat);

export { router };

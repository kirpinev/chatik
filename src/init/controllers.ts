import {
  Chat,
  DialogInterfaceWithSendFormEndTopInterface,
  MessagesContainer,
  MessagesList,
  SideInterfaceWithAvatarAndMessages,
} from '../modules/controllers';

import {
  avatar,
  search,
  favorites,
  bottomInterface,
  topInterface,
  userInfo,
} from './views';

import { authApi, chatApi } from './api';

import { router } from './init-router';

import { Validation } from '../modules/models';

import { errors, path } from '../modules/constants';

import { checkInputsOnFocusAndBlur, checkOnSubmit } from '../modules/utils';

const messagesList = new MessagesList();
const SideInterface = new SideInterfaceWithAvatarAndMessages(
  avatar,
  search,
  favorites,
  messagesList,
);

const messagesContainer = new MessagesContainer();

const DialogInterface = new DialogInterfaceWithSendFormEndTopInterface(
  topInterface,
  messagesContainer,
  bottomInterface,
);

export const chat = new Chat({
  sideInterface: SideInterface,
  dialogInterface: DialogInterface,
  authApi,
  router,
  validation: new Validation(errors, '#message'),
  errors,
  checkInputsOnFocusAndBlur,
  form: '#message',
  path,
  checkOnSubmit,
  userInfo,
  chatApi,
});

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
  bottomInterface,
  topInterface,
  userInfo,
  chatAvatarForm,
  chatInfo,
  userInfoFromChat,
} from './views';

import { authApi, chatApi, userApi } from './api';

import { router } from './init-router';

import { Validation } from '../modules/models';

import { errors, path } from '../modules/constants';

import {
  checkInputsOnFocusAndBlur,
  sendMessageOnSubmit,
} from '../modules/utils';

const messagesList = new MessagesList();
const SideInterface = new SideInterfaceWithAvatarAndMessages(
  avatar,
  search,
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
  chatAvatarForm,
  userInfoFromChat,
  chatInfo,
  authApi,
  router,
  validation: new Validation(errors, '#message'),
  errors,
  checkInputsOnFocusAndBlur,
  form: '#message',
  path,
  sendMessageOnSubmit,
  userInfo,
  chatApi,
  userApi,
});

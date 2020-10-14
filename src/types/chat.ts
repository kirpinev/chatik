import {
  DialogInterfaceWithSendFormEndTopInterface,
  SideInterfaceWithAvatarAndMessages,
} from '../modules/controllers';

import { Router, Validation } from '../modules/models';

import { ErrorsInterface, PathInterface } from '../interfaces';

import { AuthApi, ChatsApi, UsersApi } from '../modules/api';

import { UserInfo, ChatAvatarForm, ChatInfo } from '../modules/views';

export type ChatPropTypes = {
  sideInterface: SideInterfaceWithAvatarAndMessages;
  dialogInterface: DialogInterfaceWithSendFormEndTopInterface;
  chatAvatarForm: ChatAvatarForm;
  chatInfo: ChatInfo;
  checkInputsOnFocusAndBlur: (validation: Validation, form: string) => void;
  sendMessageOnSubmit: (
    validation: Validation,
    elem: string,
    socket: WebSocket,
    chatId: any,
  ) => void;
  validation: Validation;
  errors: ErrorsInterface;
  form: string;
  router: Router;
  path: PathInterface;
  authApi: AuthApi;
  chatApi: ChatsApi;
  userInfo: UserInfo;
  userApi: UsersApi;
};

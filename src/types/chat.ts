import {
  DialogInterfaceWithSendFormEndTopInterface,
  SideInterfaceWithAvatarAndMessages,
} from '../modules/controllers';

import { Router, Validation } from '../modules/models';

import { ErrorsInterface, PathInterface } from '../interfaces';

import { AuthApi, ChatsApi } from '../modules/api';

import { UserInfo } from '../modules/views';

export type ChatPropTypes = {
  sideInterface: SideInterfaceWithAvatarAndMessages;
  dialogInterface: DialogInterfaceWithSendFormEndTopInterface;
  checkInputsOnFocusAndBlur: (validation: Validation, form: string) => void;
  checkOnSubmit: (validation: Validation, elem: string) => void;
  validation: Validation;
  errors: ErrorsInterface;
  form: string;
  router: Router;
  path: PathInterface;
  authApi: AuthApi;
  chatApi: ChatsApi;
  userInfo: UserInfo;
};

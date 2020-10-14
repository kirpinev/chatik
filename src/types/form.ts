import { Router, Validation } from '../modules/models';
import { ErrorsInterface, PathInterface } from '../interfaces';
import { AuthApi, ChatsApi, UsersApi } from '../modules/api';
import { Chat } from '../modules/controllers';

export type FormPropTypes = {
  checkInputsOnFocusAndBlur: (validation: Validation, form: string) => void;
  getDataOnSubmit: (
    validation: Validation,
    elem: string,
  ) => { status: boolean; data?: object };
  validation: Validation;
  errors: ErrorsInterface;
  form?: string;
  router: Router;
  path: PathInterface;
  button?: string;
  authApi?: AuthApi;
  userApi?: UsersApi;
  chatApi?: ChatsApi;
  error?: string;
  chat?: Chat;
};

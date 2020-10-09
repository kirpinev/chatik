import {
  Avatar,
  AvatarForm,
  BottomInterface,
  ChatForm,
  ErrorPage,
  Favorites,
  FormAuth,
  FormReg,
  NotFoundPage,
  PasswordForm,
  Search,
  TopInterface,
  UserInfo,
} from '../modules/views';

import {
  authData,
  avaFormData,
  chatFormData,
  errorPageData,
  errors,
  favData,
  notFoundPageData,
  passData,
  path,
  regData,
  userInfoData,
} from '../modules/constants';

import { Validation } from '../modules/models';

import { checkInputsOnFocusAndBlur, getDataOnSubmit } from '../modules/utils';

import { authApi, chatApi, userApi } from './api';

import { router } from './init-router';

export const reg = new FormReg(regData, {
  validation: new Validation(errors, '#reg'),
  errors,
  checkInputsOnFocusAndBlur,
  form: '#reg',
  authApi,
  router,
  path,
  button: 'auth-form',
  error: '#reg-error',
  getDataOnSubmit,
});

export const auth = new FormAuth(authData, {
  validation: new Validation(errors, '#auth'),
  errors,
  checkInputsOnFocusAndBlur,
  form: '#auth',
  authApi,
  router,
  path,
  button: 'reg-form',
  error: '#reg-error',
  getDataOnSubmit,
});

export const userInfo = new UserInfo(userInfoData, {
  validation: new Validation(errors, '#user'),
  errors,
  checkInputsOnFocusAndBlur,
  form: '#user',
  authApi,
  userApi,
  router,
  path,
  button: '#chat-button',
  getDataOnSubmit,
});

export const passForm = new PasswordForm(passData, {
  validation: new Validation(errors, '#pass'),
  errors,
  checkInputsOnFocusAndBlur,
  form: '#pass',
  authApi,
  userApi,
  router,
  path,
  button: '#pass-form',
  error: '#pass-error',
  getDataOnSubmit,
});

export const avaForm = new AvatarForm(avaFormData, {
  validation: new Validation(errors, '#myAvatarForm'),
  errors,
  checkInputsOnFocusAndBlur,
  form: '#myAvatarForm',
  userApi,
  router,
  path,
  button: '#ava-form',
  error: '#ava-error',
  getDataOnSubmit,
});

export const chatForm = new ChatForm(chatFormData, {
  validation: new Validation(errors, '#chatForm'),
  errors,
  checkInputsOnFocusAndBlur,
  form: '#chatForm',
  chatApi,
  router,
  path,
  button: 'chat-form-button',
  error: '#chat-form-error',
  getDataOnSubmit,
});

export const notFoundPage = new NotFoundPage(notFoundPageData, {
  router,
  page: '#not-found-page',
  path,
});

export const errorPage = new ErrorPage(errorPageData, {
  router,
  page: '#error-page',
  path,
});

export const avatar = new Avatar();

export const search = new Search();

export const favorites = new Favorites(favData);

export const topInterface = new TopInterface();

export const bottomInterface = new BottomInterface();

import { AuthApi, UsersApi, ChatsApi, Api } from '../modules/api';

const api = new Api('https://ya-praktikum.tech/api/v2');

export const authApi = new AuthApi(api);

export const userApi = new UsersApi(api);

export const chatApi = new ChatsApi(api);

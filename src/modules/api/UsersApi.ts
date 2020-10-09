import { Api } from './Api';

import { PromiseInterface, UsersApiInterface } from '../../interfaces';

export class UsersApi implements UsersApiInterface {
  constructor(private readonly api: Api) {}

  updateProfile(body: object): Promise<PromiseInterface> {
    return this.api.put('/user/profile', body, null);
  }

  updatePass(body: object): Promise<PromiseInterface> {
    return this.api.put('/user/password', body, null);
  }

  updateAvatar(body: Element): Promise<PromiseInterface> {
    return this.api.put('/user/profile/avatar', body, 'multipart/form-data');
  }

  searchUser(body: null): Promise<PromiseInterface> {
    return this.api.post('/user/search', body);
  }
}
